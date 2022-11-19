import { LCDClient } from "@osmonauts/lcd";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
  }
  /* CurrentPlan queries the current upgrade plan. */


  async currentPlan(_params: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponseSDKType> {
    const endpoint = `cosmos/upgrade/v1beta1/current_plan`;
    return await this.req.get<QueryCurrentPlanResponseSDKType>(endpoint);
  }
  /* AppliedPlan queries a previously applied upgrade plan by its name. */


  async appliedPlan(params: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponseSDKType> {
    const endpoint = `cosmos/upgrade/v1beta1/applied_plan/${params.name}`;
    return await this.req.get<QueryAppliedPlanResponseSDKType>(endpoint);
  }
  /* UpgradedConsensusState queries the consensus state that will serve
   as a trusted kernel for the next version of this chain. It will only be
   stored at the last height of this chain.
   UpgradedConsensusState RPC not supported with legacy querier */


  async upgradedConsensusState(params: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponseSDKType> {
    const endpoint = `cosmos/upgrade/v1beta1/upgraded_consensus_state/${params.lastHeight}`;
    return await this.req.get<QueryUpgradedConsensusStateResponseSDKType>(endpoint);
  }
  /* ModuleVersions queries the list of module versions from state. */


  async moduleVersions(params: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.moduleName !== "undefined") {
      options.params.module_name = params.moduleName;
    }

    const endpoint = `cosmos/upgrade/v1beta1/module_versions`;
    return await this.req.get<QueryModuleVersionsResponseSDKType>(endpoint, options);
  }

}