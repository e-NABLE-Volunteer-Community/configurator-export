import { PartName } from '../onshape/onshape-types';
import * as path from 'path';
import { BomInstance } from '../../bom-types-and-schemas';
import { Fusion360FileService } from './fusion360-bom-exporter';

type Fusion360PrivateInfo = {
  filename: string;
  parameters?: Record<string, string>;
  outputDir: string;
};

export class Fusion360ExportUrlBuilder {
  constructor(private readonly fileService: Fusion360FileService) {}

  public urlForDeviceDirAndPartName(
    deviceDir: string,
    partName: PartName,
  ): string {
    const privateInfo = this.privateInfoForPartName(partName);
    const params = this.paramsForDeviceDirAndPartNamePrivateInfo(
      deviceDir,
      partName,
      privateInfo,
    );
    return this.urlForParams(params);
  }

  public urlForDeviceDirPartNameAndInstance(
    deviceDir: string,
    partName: string,
    instance: BomInstance,
  ): string {
    const privateInfo = this.privateInfoForInstance(instance);
    const params = this.paramsForDeviceDirAndPartNamePrivateInfo(
      deviceDir,
      partName,
      privateInfo,
    );
    return this.urlForParams(params);
  }

  private privateInfoForPartName(partName: PartName): Fusion360PrivateInfo {
    return {
      filename: partName + '.stl',
      outputDir: this.fileService.getOutputDir(),
    };
  }

  private privateInfoForInstance(instance: BomInstance): Fusion360PrivateInfo {
    return {
      filename: instance.name + '.stl',
      outputDir: this.fileService.getOutputDir(),
      parameters: instance.parameters,
    };
  }

  private urlForParams(params: URLSearchParams): string {
    return `fusion360://host/?` + params.toString();
  }

  private paramsForDeviceDirAndPartNamePrivateInfo(
    deviceDir: string,
    partName: string,
    privateInfo: Fusion360PrivateInfo,
  ): URLSearchParams {
    const params = this.baseParamsForDeviceDirAndPartName(deviceDir, partName);
    params.set('privateInfo', JSON.stringify(privateInfo));
    return params;
  }

  private baseParamsForDeviceDirAndPartName(
    deviceDir: string,
    partName: PartName,
  ): URLSearchParams {
    const params = new URLSearchParams();
    params.set('command', 'open');
    params.set('file', this.fileForDeviceDirAndPartName(deviceDir, partName));
    return params;
  }

  private fileForDeviceDirAndPartName(
    deviceDir: string,
    partName: PartName,
  ): string {
    const inputDir = this.fileService.getInputDirForDevice(deviceDir);
    return path.join(inputDir, partName + '.f3d');
  }
}
