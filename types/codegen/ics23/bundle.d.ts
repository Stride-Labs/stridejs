import * as _149 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _149.HashOp;
    hashOpToJSON(object: _149.HashOp): string;
    lengthOpFromJSON(object: any): _149.LengthOp;
    lengthOpToJSON(object: _149.LengthOp): string;
    HashOp: typeof _149.HashOp;
    HashOpSDKType: typeof _149.HashOpSDKType;
    LengthOp: typeof _149.LengthOp;
    LengthOpSDKType: typeof _149.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _149.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _149.HashOp;
                prehashKey?: _149.HashOp;
                prehashValue?: _149.HashOp;
                length?: _149.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _149.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _149.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _149.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _149.HashOp;
                    prehashKey?: _149.HashOp;
                    prehashValue?: _149.HashOp;
                    length?: _149.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _149.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _149.HashOp;
                    prehashKey?: _149.HashOp;
                    prehashValue?: _149.HashOp;
                    length?: _149.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _149.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _149.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _149.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _149.HashOp;
                    prehashKey?: _149.HashOp;
                    prehashValue?: _149.HashOp;
                    length?: _149.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _149.HashOp;
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
                        hash?: _149.HashOp;
                        prehashKey?: _149.HashOp;
                        prehashValue?: _149.HashOp;
                        length?: _149.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _149.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _149.HashOp;
                        prehashKey?: _149.HashOp;
                        prehashValue?: _149.HashOp;
                        length?: _149.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _149.HashOp;
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
                            hash?: _149.HashOp;
                            prehashKey?: _149.HashOp;
                            prehashValue?: _149.HashOp;
                            length?: _149.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _149.HashOp;
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
                                hash?: _149.HashOp;
                                prehashKey?: _149.HashOp;
                                prehashValue?: _149.HashOp;
                                length?: _149.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _149.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _149.HashOp;
                                prehashKey?: _149.HashOp;
                                prehashValue?: _149.HashOp;
                                length?: _149.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _149.HashOp;
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
                            hash?: _149.HashOp;
                            prehashKey?: _149.HashOp;
                            prehashValue?: _149.HashOp;
                            length?: _149.LengthOp;
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
                                hash?: _149.HashOp;
                                prehashKey?: _149.HashOp;
                                prehashValue?: _149.HashOp;
                                length?: _149.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _149.HashOp;
                                prehashKey?: _149.HashOp;
                                prehashValue?: _149.HashOp;
                                length?: _149.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _149.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _149.CommitmentProof;
    };
    LeafOp: {
        encode(message: _149.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.LeafOp;
        fromPartial(object: {
            hash?: _149.HashOp;
            prehashKey?: _149.HashOp;
            prehashValue?: _149.HashOp;
            length?: _149.LengthOp;
            prefix?: Uint8Array;
        }): _149.LeafOp;
    };
    InnerOp: {
        encode(message: _149.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.InnerOp;
        fromPartial(object: {
            hash?: _149.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _149.InnerOp;
    };
    ProofSpec: {
        encode(message: _149.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _149.HashOp;
                prehashKey?: _149.HashOp;
                prehashValue?: _149.HashOp;
                length?: _149.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _149.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _149.ProofSpec;
    };
    InnerSpec: {
        encode(message: _149.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _149.HashOp;
        }): _149.InnerSpec;
    };
    BatchProof: {
        encode(message: _149.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _149.HashOp;
                        prehashKey?: _149.HashOp;
                        prehashValue?: _149.HashOp;
                        length?: _149.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _149.HashOp;
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
                            hash?: _149.HashOp;
                            prehashKey?: _149.HashOp;
                            prehashValue?: _149.HashOp;
                            length?: _149.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _149.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _149.HashOp;
                            prehashKey?: _149.HashOp;
                            prehashValue?: _149.HashOp;
                            length?: _149.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _149.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _149.BatchProof;
    };
    BatchEntry: {
        encode(message: _149.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _149.HashOp;
                    prehashKey?: _149.HashOp;
                    prehashValue?: _149.HashOp;
                    length?: _149.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _149.HashOp;
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
                        hash?: _149.HashOp;
                        prehashKey?: _149.HashOp;
                        prehashValue?: _149.HashOp;
                        length?: _149.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _149.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _149.HashOp;
                        prehashKey?: _149.HashOp;
                        prehashValue?: _149.HashOp;
                        length?: _149.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _149.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _149.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _149.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _149.HashOp;
                        prehashKey?: _149.HashOp;
                        prehashValue?: _149.HashOp;
                        length?: _149.LengthOp;
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
                            hash?: _149.HashOp;
                            prehashKey?: _149.HashOp;
                            prehashValue?: _149.HashOp;
                            length?: _149.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _149.HashOp;
                            prehashKey?: _149.HashOp;
                            prehashValue?: _149.HashOp;
                            length?: _149.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _149.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _149.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _149.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _149.HashOp;
                    prehashKey?: _149.HashOp;
                    prehashValue?: _149.HashOp;
                    length?: _149.LengthOp;
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
                        hash?: _149.HashOp;
                        prehashKey?: _149.HashOp;
                        prehashValue?: _149.HashOp;
                        length?: _149.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _149.HashOp;
                        prehashKey?: _149.HashOp;
                        prehashValue?: _149.HashOp;
                        length?: _149.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _149.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _149.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _149.HashOp;
                prehashKey?: _149.HashOp;
                prehashValue?: _149.HashOp;
                length?: _149.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _149.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _149.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _149.HashOp;
                    prehashKey?: _149.HashOp;
                    prehashValue?: _149.HashOp;
                    length?: _149.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _149.HashOp;
                    prehashKey?: _149.HashOp;
                    prehashValue?: _149.HashOp;
                    length?: _149.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _149.CompressedNonExistenceProof;
    };
};
