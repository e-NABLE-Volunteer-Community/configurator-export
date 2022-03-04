import puppeteer from 'puppeteer';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BillOfMaterials } from '../../bom-types-and-schemas';
import { OnshapeExportApi } from './onshape-export-api';
import * as uuid from 'uuid';
import phoenixBom from './test-data/phoenix-v3-test-bom.json';
import axios from 'axios';
import { OnshapeDeviceNotFoundError } from './errors';
import { AccessAndRefreshToken } from './base-onshape-api';
import { UnauthorizedException } from '@nestjs/common'; // or directly

jest.setTimeout(30000);

describe('OnshapeExportApi', () => {
  let configService;
  let accessToken, refreshToken;
  let id;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    configService = module.get<ConfigService>(ConfigService);

    const onshapeTestEmail = configService.get('ONSHAPE_TEST_EMAIL');
    if (!onshapeTestEmail)
      throw new Error('ONSHAPE_TEST_EMAIL was not defined');
    const onshapeTestPassword = configService.get('ONSHAPE_TEST_PASSWORD');
    if (!onshapeTestPassword)
      throw new Error('ONSHAPE_TEST_PASSWORD was not defined');

    const browser = await puppeteer.launch();
    console.debug('Launched browser');
    const page = await browser.newPage();
    await page.goto('https://e-nable.app/auth', {
      waitUntil: 'networkidle2',
    });
    console.debug('At e-nable.app');

    const authButton = await page.$('ion-button');
    if (!authButton) throw new Error('Could not get auth button');
    await authButton.click();
    await page.waitForNetworkIdle();
    console.debug('Clicked auth button');

    const emailInput = await page.$('[name=email]');
    if (!emailInput) throw new Error('Could not get email input');
    const passwordInput = await page.$('[name=password]');
    if (!passwordInput) throw new Error('Could not get password input');
    const submitButton = await page.$('[type=submit]');
    if (!submitButton) throw new Error('Could not get submit button');

    await emailInput.type(onshapeTestEmail);
    await passwordInput.type(onshapeTestPassword);
    await submitButton.click();
    console.debug('Logged into Onshape');

    await page.waitForNetworkIdle({ idleTime: 3000 });

    const url = page.url();
    if (!url.includes('e-nable.app'))
      throw new Error('Did not get back to e-nable.app, ended up at: ' + url);

    const { _accessToken, _refreshToken } = JSON.parse(
      await page.evaluate(() =>
        JSON.stringify({
          _accessToken: localStorage.getItem('accessToken'),
          _refreshToken: localStorage.getItem('refreshToken'),
        }),
      ),
    );

    accessToken = _accessToken;
    refreshToken = _refreshToken;

    if (!accessToken)
      throw new Error('Could not retrieve accessToken from localStorage');
    if (!refreshToken)
      throw new Error('Could not retrieve refreshToken from localStorage');

    console.debug('Got tokens');

    await browser.close();

    axios.interceptors.request.use((request) => {
      console.log('Starting Request:', request);
      return request;
    });

    axios.interceptors.response.use((response) => {
      console.log('Response:', response);
      return response;
    });

    // jest.setTimeout(5000);
  });

  beforeEach(() => {
    id = uuid.v4();
  });

  const apiForBom = (
    bom: Omit<BillOfMaterials, 'authorization'>,
    authorization?: AccessAndRefreshToken,
  ): OnshapeExportApi =>
    new OnshapeExportApi(id, {
      ...bom,
      authorization: authorization ?? { accessToken, refreshToken },
    });

  describe('getParts', () => {
    it('resolves with an Array for a valid bom', async () => {
      const api = apiForBom(phoenixBom);
      await expect(api.getParts()).resolves.toEqual(expect.any(Array));
    });

    it('rejects with UnauthorizedException for invalid tokens', async () => {
      const api = apiForBom(phoenixBom, {
        accessToken: 'garbage',
        refreshToken: 'garbage',
      });
      await expect(api.getParts()).rejects.toThrow(UnauthorizedException);
    });

    it('rejects with OnshapeDeviceNotFoundError for a non-existent bom', async () => {
      const api = apiForBom({
        location: {
          documentId: 'foo',
          workspaceId: 'bar',
        },
      } as any);
      await expect(api.getParts()).rejects.toThrow(OnshapeDeviceNotFoundError);
    });
  });

  describe('exportPart', () => {
    it('resolves with a buffer of the correct length for a valid part', async () => {
      const api = apiForBom(phoenixBom);
      const elementIdForPinA = 'a6a4d08bb2755248f9e9bf1d';
      const prom = api.exportPart(elementIdForPinA);
      await expect(prom).resolves.toBeDefined();
      const buffer = await prom;
      const expectedBufferLength = 4050529;
      expect(buffer.toString().length).toEqual(expectedBufferLength);
    });
  });

  describe('exportPartWithParameters', () => {
    it('resolves with a buffer of the correct length for a valid part and parameters', async () => {
      const api = apiForBom(phoenixBom);
      const elementIdForPinA = 'a6a4d08bb2755248f9e9bf1d';
      const prom = api.exportPartWithParameters(elementIdForPinA, {
        length: '21mm',
      });
      await expect(prom).resolves.toBeDefined();
      const buffer = await prom;
      const expectedBufferLength = 4050529;
      expect(buffer.toString().length).toEqual(expectedBufferLength);
    });
  });
});
