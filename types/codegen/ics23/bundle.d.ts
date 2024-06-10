import * as _161 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _161.HashOp;
    hashOpToJSON(object: _161.HashOp): string;
    lengthOpFromJSON(object: any): _161.LengthOp;
    lengthOpToJSON(object: _161.LengthOp): string;
    HashOp: typeof _161.HashOp;
    HashOpSDKType: typeof _161.HashOpSDKType;
    LengthOp: typeof _161.LengthOp;
    LengthOpSDKType: typeof _161.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _161.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _161.HashOp;
                prehashKey?: _161.HashOp;
                prehashValue?: _161.HashOp;
                length?: _161.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _161.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _161.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _161.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _161.HashOp;
                    prehashKey?: _161.HashOp;
                    prehashValue?: _161.HashOp;
                    length?: _161.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _161.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _161.HashOp;
                    prehashKey?: _161.HashOp;
                    prehashValue?: _161.HashOp;
                    length?: _161.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _161.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _161.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _161.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _161.HashOp;
                    prehashKey?: _161.HashOp;
                    prehashValue?: _161.HashOp;
                    length?: _161.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _161.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _161.HashOp;
                        prehashKey?: _161.HashOp;
                        prehashValue?: _161.HashOp;
                        length?: _161.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _161.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _161.HashOp;
                        prehashKey?: _161.HashOp;
                        prehashValue?: _161.HashOp;
                        length?: _161.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _161.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _161.HashOp;
                            prehashKey?: _161.HashOp;
                            prehashValue?: _161.HashOp;
                            length?: _161.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _161.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _161.HashOp;
                                prehashKey?: _161.HashOp;
                                prehashValue?: _161.HashOp;
                                length?: _161.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _161.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _161.HashOp;
                                prehashKey?: _161.HashOp;
                                prehashValue?: _161.HashOp;
                                length?: _161.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _161.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _161.HashOp;
                            prehashKey?: _161.HashOp;
                            prehashValue?: _161.HashOp;
                            length?: _161.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _161.HashOp;
                                prehashKey?: _161.HashOp;
                                prehashValue?: _161.HashOp;
                                length?: _161.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _161.HashOp;
                                prehashKey?: _161.HashOp;
                                prehashValue?: _161.HashOp;
                                length?: _161.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _161.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _161.CommitmentProof;
    };
    LeafOp: {
        encode(message: _161.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.LeafOp;
        fromPartial(object: {
            hash?: _161.HashOp;
            prehashKey?: _161.HashOp;
            prehashValue?: _161.HashOp;
            length?: _161.LengthOp;
            prefix?: Uint8Array;
        }): _161.LeafOp;
    };
    InnerOp: {
        encode(message: _161.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.InnerOp;
        fromPartial(object: {
            hash?: _161.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _161.InnerOp;
    };
    ProofSpec: {
        encode(message: _161.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _161.HashOp;
                prehashKey?: _161.HashOp;
                prehashValue?: _161.HashOp;
                length?: _161.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _161.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _161.ProofSpec;
    };
    InnerSpec: {
        encode(message: _161.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _161.HashOp;
        }): _161.InnerSpec;
    };
    BatchProof: {
        encode(message: _161.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _161.HashOp;
                        prehashKey?: _161.HashOp;
                        prehashValue?: _161.HashOp;
                        length?: _161.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _161.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _161.HashOp;
                            prehashKey?: _161.HashOp;
                            prehashValue?: _161.HashOp;
                            length?: _161.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _161.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _161.HashOp;
                            prehashKey?: _161.HashOp;
                            prehashValue?: _161.HashOp;
                            length?: _161.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _161.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _161.BatchProof;
    };
    BatchEntry: {
        encode(message: _161.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _161.HashOp;
                    prehashKey?: _161.HashOp;
                    prehashValue?: _161.HashOp;
                    length?: _161.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _161.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _161.HashOp;
                        prehashKey?: _161.HashOp;
                        prehashValue?: _161.HashOp;
                        length?: _161.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _161.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _161.HashOp;
                        prehashKey?: _161.HashOp;
                        prehashValue?: _161.HashOp;
                        length?: _161.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _161.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _161.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _161.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _161.HashOp;
                        prehashKey?: _161.HashOp;
                        prehashValue?: _161.HashOp;
                        length?: _161.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _161.HashOp;
                            prehashKey?: _161.HashOp;
                            prehashValue?: _161.HashOp;
                            length?: _161.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _161.HashOp;
                            prehashKey?: _161.HashOp;
                            prehashValue?: _161.HashOp;
                            length?: _161.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _161.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _161.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _161.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _161.HashOp;
                    prehashKey?: _161.HashOp;
                    prehashValue?: _161.HashOp;
                    length?: _161.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _161.HashOp;
                        prehashKey?: _161.HashOp;
                        prehashValue?: _161.HashOp;
                        length?: _161.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _161.HashOp;
                        prehashKey?: _161.HashOp;
                        prehashValue?: _161.HashOp;
                        length?: _161.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _161.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _161.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _161.HashOp;
                prehashKey?: _161.HashOp;
                prehashValue?: _161.HashOp;
                length?: _161.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _161.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _161.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _161.HashOp;
                    prehashKey?: _161.HashOp;
                    prehashValue?: _161.HashOp;
                    length?: _161.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _161.HashOp;
                    prehashKey?: _161.HashOp;
                    prehashValue?: _161.HashOp;
                    length?: _161.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _161.CompressedNonExistenceProof;
    };
};
