var globalThis = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
  const bin = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}
function omitDefault(input) {
  if (typeof input === "string") {
    return input === "" ? void 0 : input;
  }
  if (typeof input === "number") {
    return input === 0 ? void 0 : input;
  }
  if (typeof input === "boolean") {
    return input === false ? void 0 : input;
  }
  if (typeof input === "bigint") {
    return input === BigInt(0) ? void 0 : input;
  }
  throw new Error(`Got unsupported type ${typeof input}`);
}
function toDuration(duration) {
  return {
    seconds: BigInt(Math.floor(parseInt(duration) / 1e9)),
    nanos: parseInt(duration) % 1e9
  };
}
function fromDuration(duration) {
  return (parseInt(duration.seconds.toString()) * 1e9 + duration.nanos).toString();
}
function isSet(value) {
  return value !== null && value !== void 0;
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
const setPaginationParams = (options, pagination) => {
  if (!pagination) {
    return options;
  }
  if (typeof pagination?.countTotal !== "undefined") {
    options.params["pagination.count_total"] = pagination.countTotal;
  }
  if (typeof pagination?.key !== "undefined") {
    options.params["pagination.key"] = Buffer.from(pagination.key).toString(
      "base64"
    );
  }
  if (typeof pagination?.limit !== "undefined") {
    options.params["pagination.limit"] = pagination.limit.toString();
  }
  if (typeof pagination?.offset !== "undefined") {
    options.params["pagination.offset"] = pagination.offset.toString();
  }
  if (typeof pagination?.reverse !== "undefined") {
    options.params["pagination.reverse"] = pagination.reverse;
  }
  return options;
};
function toTimestamp(date) {
  const seconds = numberToLong(date.getTime() / 1e3);
  const nanos = date.getTime() % 1e3 * 1e6;
  return {
    seconds,
    nanos
  };
}
function fromTimestamp(t) {
  let millis = Number(t.seconds) * 1e3;
  millis += t.nanos / 1e6;
  return new Date(millis);
}
const timestampFromJSON = (object) => {
  return {
    seconds: isSet(object.seconds) ? BigInt(object.seconds.toString()) : BigInt(0),
    nanos: isSet(object.nanos) ? Number(object.nanos) : 0
  };
};
function fromJsonTimestamp(o) {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return timestampFromJSON(o);
  }
}
function numberToLong(number) {
  return BigInt(Math.trunc(number));
}
export {
  base64FromBytes,
  bytesFromBase64,
  fromDuration,
  fromJsonTimestamp,
  fromTimestamp,
  isObject,
  isSet,
  omitDefault,
  setPaginationParams,
  toDuration,
  toTimestamp
};
