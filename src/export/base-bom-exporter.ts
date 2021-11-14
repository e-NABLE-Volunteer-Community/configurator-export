import * as R from 'ramda';
import Ajv from 'ajv';
import {
  BillOfMaterials,
  BillOfMaterialsSchema,
  ConfiguredBomLine,
  DefaultBomLine,
  isConfiguredBomLine,
  isDefaultBomLine,
} from '../bom-types-and-schemas.js';
import { InvalidBomError } from './errors.js';

export type StlFile = { name: string; data: string };

export abstract class BaseBomExporter<
  B extends BillOfMaterials,
  L extends B extends BillOfMaterials<infer _L> ? _L : never,
> {
  // Used to guarantee type safety in router
  public abstract readonly locationType: L;
  private static readonly validateBom = new Ajv().compile(
    BillOfMaterialsSchema,
  );

  protected constructor(
    protected readonly exportId: string,
    protected readonly billOfMaterials: B,
  ) {
    this.verifyBomStructureIsValid(this.billOfMaterials);
  }

  /**
   This method is NOT tasked with ensuring the contents of the BoM are valid.
   It is ONLY responsible for ensuring the structure of the BoM is valid.
   For example, this method DOES NOT check that the device exists, or that the
   list of parts matches what's available.
   This method DOES check that the BoM has a name, a location, and a materials
   property of the correct form.
   */
  private verifyBomStructureIsValid(billOfMaterials: BillOfMaterials): void {
    if (!BaseBomExporter.validateBom(billOfMaterials))
      throw new InvalidBomError(BaseBomExporter.validateBom.errors);
    this.verifyBomLocationStructureIsValid(billOfMaterials.location);
  }

  //TODO: Consider refactoring to make locationSchema an abstract member
  // on BaseBomExporter like locationType is
  /**
   This method is NOT tasked with ensuring the device described by the location
   is available. It is ONLY responsible for ensuring that the structure of the
   location object is correct.
   */
  protected abstract verifyBomLocationStructureIsValid(
    location: B['location'],
  ): void;

  protected abstract verifyDeviceAndAllPartsAreAvailable(): Promise<void>;

  public async exportBom(): Promise<StlFile[]> {
    await this.verifyDeviceAndAllPartsAreAvailable();
    const stlPromises: Promise<StlFile[]>[] = [];
    for (const [partName, line] of R.toPairs(this.billOfMaterials.materials)) {
      console.info(`Exporting ${partName}...`);
      if (isDefaultBomLine(line))
        stlPromises.push(this.stlsForDefaultLine(partName, line));
      if (isConfiguredBomLine(line))
        stlPromises.push(this.stlsForConfiguredLine(partName, line));
    }
    const stls = await Promise.all(stlPromises);
    console.info('Export done.');
    return R.flatten(stls);
  }

  // TODO: Refactor to return individual STL files instead of arrays
  protected abstract stlsForDefaultLine(
    partName: string,
    line: DefaultBomLine,
  ): Promise<StlFile[]>;
  protected abstract stlsForConfiguredLine(
    partName: string,
    line: ConfiguredBomLine,
  ): Promise<StlFile[]>;
}
