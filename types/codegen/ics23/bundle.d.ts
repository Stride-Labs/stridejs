import * as _165 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _165.HashOp;
    hashOpToJSON(object: _165.HashOp): string;
    lengthOpFromJSON(object: any): _165.LengthOp;
    lengthOpToJSON(object: _165.LengthOp): string;
    HashOp: typeof _165.HashOp;
    HashOpSDKType: typeof _165.HashOpSDKType;
    LengthOp: typeof _165.LengthOp;
    LengthOpSDKType: typeof _165.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _165.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _165.HashOp;
                prehashKey?: _165.HashOp;
                prehashValue?: _165.HashOp;
                length?: _165.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _165.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _165.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _165.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _165.HashOp;
                    prehashKey?: _165.HashOp;
                    prehashValue?: _165.HashOp;
                    length?: _165.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _165.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _165.HashOp;
                    prehashKey?: _165.HashOp;
                    prehashValue?: _165.HashOp;
                    length?: _165.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _165.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _165.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _165.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _165.HashOp;
                    prehashKey?: _165.HashOp;
                    prehashValue?: _165.HashOp;
                    length?: _165.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _165.HashOp;
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
                        hash?: _165.HashOp;
                        prehashKey?: _165.HashOp;
                        prehashValue?: _165.HashOp;
                        length?: _165.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _165.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _165.HashOp;
                        prehashKey?: _165.HashOp;
                        prehashValue?: _165.HashOp;
                        length?: _165.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _165.HashOp;
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
                            hash?: _165.HashOp;
                            prehashKey?: _165.HashOp;
                            prehashValue?: _165.HashOp;
                            length?: _165.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _165.HashOp;
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
                                hash?: _165.HashOp;
                                prehashKey?: _165.HashOp;
                                prehashValue?: _165.HashOp;
                                length?: _165.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _165.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _165.HashOp;
                                prehashKey?: _165.HashOp;
                                prehashValue?: _165.HashOp;
                                length?: _165.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _165.HashOp;
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
                            hash?: _165.HashOp;
                            prehashKey?: _165.HashOp;
                            prehashValue?: _165.HashOp;
                            length?: _165.LengthOp;
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
                                hash?: _165.HashOp;
                                prehashKey?: _165.HashOp;
                                prehashValue?: _165.HashOp;
                                length?: _165.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _165.HashOp;
                                prehashKey?: _165.HashOp;
                                prehashValue?: _165.HashOp;
                                length?: _165.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _165.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _165.CommitmentProof;
    };
    LeafOp: {
        encode(message: _165.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.LeafOp;
        fromPartial(object: {
            hash?: _165.HashOp;
            prehashKey?: _165.HashOp;
            prehashValue?: _165.HashOp;
            length?: _165.LengthOp;
            prefix?: Uint8Array;
        }): _165.LeafOp;
    };
    InnerOp: {
        encode(message: _165.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.InnerOp;
        fromPartial(object: {
            hash?: _165.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _165.InnerOp;
    };
    ProofSpec: {
        encode(message: _165.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _165.HashOp;
                prehashKey?: _165.HashOp;
                prehashValue?: _165.HashOp;
                length?: _165.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _165.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _165.ProofSpec;
    };
    InnerSpec: {
        encode(message: _165.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _165.HashOp;
        }): _165.InnerSpec;
    };
    BatchProof: {
        encode(message: _165.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _165.HashOp;
                        prehashKey?: _165.HashOp;
                        prehashValue?: _165.HashOp;
                        length?: _165.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _165.HashOp;
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
                            hash?: _165.HashOp;
                            prehashKey?: _165.HashOp;
                            prehashValue?: _165.HashOp;
                            length?: _165.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _165.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _165.HashOp;
                            prehashKey?: _165.HashOp;
                            prehashValue?: _165.HashOp;
                            length?: _165.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _165.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _165.BatchProof;
    };
    BatchEntry: {
        encode(message: _165.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _165.HashOp;
                    prehashKey?: _165.HashOp;
                    prehashValue?: _165.HashOp;
                    length?: _165.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _165.HashOp;
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
                        hash?: _165.HashOp;
                        prehashKey?: _165.HashOp;
                        prehashValue?: _165.HashOp;
                        length?: _165.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _165.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _165.HashOp;
                        prehashKey?: _165.HashOp;
                        prehashValue?: _165.HashOp;
                        length?: _165.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _165.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _165.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _165.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _165.HashOp;
                        prehashKey?: _165.HashOp;
                        prehashValue?: _165.HashOp;
                        length?: _165.LengthOp;
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
                            hash?: _165.HashOp;
                            prehashKey?: _165.HashOp;
                            prehashValue?: _165.HashOp;
                            length?: _165.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _165.HashOp;
                            prehashKey?: _165.HashOp;
                            prehashValue?: _165.HashOp;
                            length?: _165.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _165.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _165.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _165.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _165.HashOp;
                    prehashKey?: _165.HashOp;
                    prehashValue?: _165.HashOp;
                    length?: _165.LengthOp;
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
                        hash?: _165.HashOp;
                        prehashKey?: _165.HashOp;
                        prehashValue?: _165.HashOp;
                        length?: _165.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _165.HashOp;
                        prehashKey?: _165.HashOp;
                        prehashValue?: _165.HashOp;
                        length?: _165.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _165.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _165.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _165.HashOp;
                prehashKey?: _165.HashOp;
                prehashValue?: _165.HashOp;
                length?: _165.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _165.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _165.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _165.HashOp;
                    prehashKey?: _165.HashOp;
                    prehashValue?: _165.HashOp;
                    length?: _165.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _165.HashOp;
                    prehashKey?: _165.HashOp;
                    prehashValue?: _165.HashOp;
                    length?: _165.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _165.CompressedNonExistenceProof;
    };
};
