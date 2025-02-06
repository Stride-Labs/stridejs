function utf8Length(str) {
  let len = 0, c = 0;
  for (let i = 0; i < str.length; ++i) {
    c = str.charCodeAt(i);
    if (c < 128) len += 1;
    else if (c < 2048) len += 2;
    else if ((c & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
      ++i;
      len += 4;
    } else len += 3;
  }
  return len;
}
function utf8Read(buffer, start, end) {
  const len = end - start;
  if (len < 1) return "";
  const chunk = [];
  let parts = [], i = 0, t;
  while (start < end) {
    t = buffer[start++];
    if (t < 128) chunk[i++] = t;
    else if (t > 191 && t < 224)
      chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
    else if (t > 239 && t < 365) {
      t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
      chunk[i++] = 55296 + (t >> 10);
      chunk[i++] = 56320 + (t & 1023);
    } else
      chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode(...chunk));
      i = 0;
    }
  }
  if (parts) {
    if (i) parts.push(String.fromCharCode(...chunk.slice(0, i)));
    return parts.join("");
  }
  return String.fromCharCode(...chunk.slice(0, i));
}
function utf8Write(str, buffer, offset) {
  const start = offset;
  let c1, c2;
  for (let i = 0; i < str.length; ++i) {
    c1 = str.charCodeAt(i);
    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 64512) === 55296 && ((c2 = str.charCodeAt(i + 1)) & 64512) === 56320) {
      c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
      ++i;
      buffer[offset++] = c1 >> 18 | 240;
      buffer[offset++] = c1 >> 12 & 63 | 128;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    } else {
      buffer[offset++] = c1 >> 12 | 224;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    }
  }
  return offset - start;
}
export {
  utf8Length,
  utf8Read,
  utf8Write
};
