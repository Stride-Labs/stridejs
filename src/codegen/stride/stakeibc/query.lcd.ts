import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetValidatorsRequest, QueryGetValidatorsResponseSDKType, QueryGetICAAccountRequest, QueryGetICAAccountResponseSDKType, QueryGetHostZoneRequest, QueryGetHostZoneResponseSDKType, QueryAllHostZoneRequest, QueryAllHostZoneResponseSDKType, QueryModuleAddressRequest, QueryModuleAddressResponseSDKType, QueryGetEpochTrackerRequest, QueryGetEpochTrackerResponseSDKType, QueryAllEpochTrackerRequest, QueryAllEpochTrackerResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.validators = this.validators.bind(this);
    this.iCAAccount = this.iCAAccount.bind(this);
    this.hostZone = this.hostZone.bind(this);
    this.hostZoneAll = this.hostZoneAll.bind(this);
    this.moduleAddress = this.moduleAddress.bind(this);
    this.epochTracker = this.epochTracker.bind(this);
    this.epochTrackerAll = this.epochTrackerAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `Stridelabs/stride/stakeibc/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Validator by host zone. */


  async validators(params: QueryGetValidatorsRequest): Promise<QueryGetValidatorsResponseSDKType> {
    const endpoint = `Stride-Labs/stride/stakeibc/validators/${params.chainId}`;
    return await this.req.get<QueryGetValidatorsResponseSDKType>(endpoint);
  }
  /* Queries a ICAAccount by index. */


  async iCAAccount(_params: QueryGetICAAccountRequest = {}): Promise<QueryGetICAAccountResponseSDKType> {
    const endpoint = `Stride-Labs/stride/stakeibc/ica_account`;
    return await this.req.get<QueryGetICAAccountResponseSDKType>(endpoint);
  }
  /* Queries a HostZone by id. */


  async hostZone(params: QueryGetHostZoneRequest): Promise<QueryGetHostZoneResponseSDKType> {
    const endpoint = `Stride-Labs/stride/stakeibc/host_zone/${params.chainId}`;
    return await this.req.get<QueryGetHostZoneResponseSDKType>(endpoint);
  }
  /* Queries a list of HostZone items. */


  async hostZoneAll(params: QueryAllHostZoneRequest = {
    pagination: undefined
  }): Promise<QueryAllHostZoneResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/stakeibc/host_zone`;
    return await this.req.get<QueryAllHostZoneResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ModuleAddress items. */


  async moduleAddress(params: QueryModuleAddressRequest): Promise<QueryModuleAddressResponseSDKType> {
    const endpoint = `Stride-Labs/stride/stakeibc/module_address/${params.name}`;
    return await this.req.get<QueryModuleAddressResponseSDKType>(endpoint);
  }
  /* Queries a EpochTracker by index. */


  async epochTracker(params: QueryGetEpochTrackerRequest): Promise<QueryGetEpochTrackerResponseSDKType> {
    const endpoint = `Stride-Labs/stride/stakeibc/epoch_tracker/${params.epochIdentifier}`;
    return await this.req.get<QueryGetEpochTrackerResponseSDKType>(endpoint);
  }
  /* Queries a list of EpochTracker items. */


  async epochTrackerAll(params: QueryAllEpochTrackerRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochTrackerResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `Stride-Labs/stride/stakeibc/epoch_tracker`;
    return await this.req.get<QueryAllEpochTrackerResponseSDKType>(endpoint, options);
  }

}