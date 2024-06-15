/* eslint-disable */



const peggyParser: {parse: any, SyntaxError: any, DefaultTracer?: any} = // Generated by Peggy 3.0.2.
//
// https://peggyjs.org/
// @ts-ignore
(function() {
// @ts-ignore
  "use strict";

// @ts-ignore
function peg$subclass(child, parent) {
// @ts-ignore
  function C() { this.constructor = child; }
// @ts-ignore
  C.prototype = parent.prototype;
// @ts-ignore
  child.prototype = new C();
}

// @ts-ignore
function peg$SyntaxError(message, expected, found, location) {
// @ts-ignore
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
// @ts-ignore
  if (Object.setPrototypeOf) {
// @ts-ignore
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
// @ts-ignore
  self.expected = expected;
// @ts-ignore
  self.found = found;
// @ts-ignore
  self.location = location;
// @ts-ignore
  self.name = "SyntaxError";
// @ts-ignore
  return self;
}

// @ts-ignore
peg$subclass(peg$SyntaxError, Error);

// @ts-ignore
function peg$padEnd(str, targetLength, padString) {
// @ts-ignore
  padString = padString || " ";
// @ts-ignore
  if (str.length > targetLength) { return str; }
// @ts-ignore
  targetLength -= str.length;
// @ts-ignore
  padString += padString.repeat(targetLength);
// @ts-ignore
  return str + padString.slice(0, targetLength);
}

// @ts-ignore
peg$SyntaxError.prototype.format = function(sources) {
// @ts-ignore
  var str = "Error: " + this.message;
// @ts-ignore
  if (this.location) {
// @ts-ignore
    var src = null;
// @ts-ignore
    var k;
// @ts-ignore
    for (k = 0; k < sources.length; k++) {
// @ts-ignore
      if (sources[k].source === this.location.source) {
// @ts-ignore
        src = sources[k].text.split(/\r\n|\n|\r/g);
// @ts-ignore
        break;
      }
    }
// @ts-ignore
    var s = this.location.start;
// @ts-ignore
    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))
// @ts-ignore
      ? this.location.source.offset(s)
// @ts-ignore
      : s;
// @ts-ignore
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
// @ts-ignore
    if (src) {
// @ts-ignore
      var e = this.location.end;
// @ts-ignore
      var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
// @ts-ignore
      var line = src[s.line - 1];
// @ts-ignore
      var last = s.line === e.line ? e.column : line.length + 1;
// @ts-ignore
      var hatLen = (last - s.column) || 1;
// @ts-ignore
      str += "\n --> " + loc + "\n"
// @ts-ignore
          + filler + " |\n"
// @ts-ignore
          + offset_s.line + " | " + line + "\n"
// @ts-ignore
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
// @ts-ignore
          + peg$padEnd("", hatLen, "^");
// @ts-ignore
    } else {
// @ts-ignore
      str += "\n at " + loc;
    }
  }
// @ts-ignore
  return str;
};

// @ts-ignore
peg$SyntaxError.buildMessage = function(expected, found) {
// @ts-ignore
  var DESCRIBE_EXPECTATION_FNS = {
// @ts-ignore
    literal: function(expectation) {
// @ts-ignore
      return "\"" + literalEscape(expectation.text) + "\"";
    },

// @ts-ignore
    class: function(expectation) {
// @ts-ignore
      var escapedParts = expectation.parts.map(function(part) {
// @ts-ignore
        return Array.isArray(part)
// @ts-ignore
          ? classEscape(part[0]) + "-" + classEscape(part[1])
// @ts-ignore
          : classEscape(part);
      });

// @ts-ignore
      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

// @ts-ignore
    any: function() {
// @ts-ignore
      return "any character";
    },

// @ts-ignore
    end: function() {
// @ts-ignore
      return "end of input";
    },

// @ts-ignore
    other: function(expectation) {
// @ts-ignore
      return expectation.description;
    }
  };

// @ts-ignore
  function hex(ch) {
// @ts-ignore
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

// @ts-ignore
  function literalEscape(s) {
// @ts-ignore
    return s
// @ts-ignore
      .replace(/\\/g, "\\\\")
// @ts-ignore
      .replace(/"/g,  "\\\"")
// @ts-ignore
      .replace(/\0/g, "\\0")
// @ts-ignore
      .replace(/\t/g, "\\t")
// @ts-ignore
      .replace(/\n/g, "\\n")
// @ts-ignore
      .replace(/\r/g, "\\r")
// @ts-ignore
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
// @ts-ignore
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

// @ts-ignore
  function classEscape(s) {
// @ts-ignore
    return s
// @ts-ignore
      .replace(/\\/g, "\\\\")
// @ts-ignore
      .replace(/\]/g, "\\]")
// @ts-ignore
      .replace(/\^/g, "\\^")
// @ts-ignore
      .replace(/-/g,  "\\-")
// @ts-ignore
      .replace(/\0/g, "\\0")
// @ts-ignore
      .replace(/\t/g, "\\t")
// @ts-ignore
      .replace(/\n/g, "\\n")
// @ts-ignore
      .replace(/\r/g, "\\r")
// @ts-ignore
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
// @ts-ignore
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

// @ts-ignore
  function describeExpectation(expectation) {
// @ts-ignore
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

// @ts-ignore
  function describeExpected(expected) {
// @ts-ignore
    var descriptions = expected.map(describeExpectation);
// @ts-ignore
    var i, j;

// @ts-ignore
    descriptions.sort();

// @ts-ignore
    if (descriptions.length > 0) {
// @ts-ignore
      for (i = 1, j = 1; i < descriptions.length; i++) {
// @ts-ignore
        if (descriptions[i - 1] !== descriptions[i]) {
// @ts-ignore
          descriptions[j] = descriptions[i];
// @ts-ignore
          j++;
        }
      }
// @ts-ignore
      descriptions.length = j;
    }

// @ts-ignore
    switch (descriptions.length) {
// @ts-ignore
      case 1:
// @ts-ignore
        return descriptions[0];

// @ts-ignore
      case 2:
// @ts-ignore
        return descriptions[0] + " or " + descriptions[1];

// @ts-ignore
      default:
// @ts-ignore
        return descriptions.slice(0, -1).join(", ")
// @ts-ignore
          + ", or "
// @ts-ignore
          + descriptions[descriptions.length - 1];
    }
  }

// @ts-ignore
  function describeFound(found) {
// @ts-ignore
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

// @ts-ignore
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

// @ts-ignore
function peg$parse(input, options) {
// @ts-ignore
  options = options !== undefined ? options : {};

// @ts-ignore
  var peg$FAILED = {};
// @ts-ignore
  var peg$source = options.grammarSource;

// @ts-ignore
  var peg$startRuleFunctions = { Content: peg$parseContent };
// @ts-ignore
  var peg$startRuleFunction = peg$parseContent;

// @ts-ignore
  var peg$c0 = "[";
  var peg$c1 = "]";
  var peg$c2 = "[/";
  var peg$c3 = "c";
  var peg$c4 = "i";
  var peg$c5 = "u";
  var peg$c6 = "s";
  var peg$c7 = "~";
  var peg$c8 = "^";
  var peg$c9 = " ";
  var peg$c10 = "success";
  var peg$c11 = "warning";
  var peg$c12 = "danger";

  var peg$r0 = /^[^[]/;

  var peg$e0 = peg$literalExpectation("[", false);
  var peg$e1 = peg$literalExpectation("]", false);
  var peg$e2 = peg$literalExpectation("[/", false);
  var peg$e3 = peg$literalExpectation("c", false);
  var peg$e4 = peg$literalExpectation("i", false);
  var peg$e5 = peg$literalExpectation("u", false);
  var peg$e6 = peg$literalExpectation("s", false);
  var peg$e7 = peg$literalExpectation("~", false);
  var peg$e8 = peg$literalExpectation("^", false);
  var peg$e9 = peg$literalExpectation(" ", false);
  var peg$e10 = peg$literalExpectation("success", false);
  var peg$e11 = peg$literalExpectation("warning", false);
  var peg$e12 = peg$literalExpectation("danger", false);
  var peg$e13 = peg$classExpectation(["["], true, false);
// @ts-ignore

  var peg$f0 = function(startTag, content, endTag) {
// @ts-ignore
    if (startTag.name !== endTag) {
// @ts-ignore
      throw new Error(
// @ts-ignore
        "Expected [/" + startTag.name + "] but [/" + endTag + "] found."
      );
    }

// @ts-ignore
    return {
// @ts-ignore
      tag: startTag,
// @ts-ignore
      content: content
    };
  };// @ts-ignore

  var peg$f1 = function(name, variant) { 
// @ts-ignore
  	if (name !== 'c' && variant) {
// @ts-ignore
    	throw new Error(
// @ts-ignore
          '[' + name + ']' + ' cannot have \"' + variant + '\" as property'
        )
    }
    
// @ts-ignore
    if (name === 'c' && !variant) {
// @ts-ignore
	    throw new Error(
// @ts-ignore
        	'[' + name + ']' + ' must have a variant property'
        )
    }

// @ts-ignore
  	return variant ? { name, variant } : { name };
  };// @ts-ignore

  var peg$f2 = function(name) {// @ts-ignore
 return name; };// @ts-ignore

  var peg$f3 = function(variant) {// @ts-ignore
 return variant };// @ts-ignore

  var peg$f4 = function(chars) {// @ts-ignore
 return chars.join(""); };
// @ts-ignore
  var peg$currPos = 0;
// @ts-ignore
  var peg$savedPos = 0;
// @ts-ignore
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
// @ts-ignore
  var peg$maxFailPos = 0;
// @ts-ignore
  var peg$maxFailExpected = [];
// @ts-ignore
  var peg$silentFails = 0;

// @ts-ignore
  var peg$result;

// @ts-ignore
  if ("startRule" in options) {
// @ts-ignore
    if (!(options.startRule in peg$startRuleFunctions)) {
// @ts-ignore
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

// @ts-ignore
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

// @ts-ignore
  function text() {
// @ts-ignore
    return input.substring(peg$savedPos, peg$currPos);
  }

// @ts-ignore
  function offset() {
// @ts-ignore
    return peg$savedPos;
  }

// @ts-ignore
  function range() {
// @ts-ignore
    return {
// @ts-ignore
      source: peg$source,
// @ts-ignore
      start: peg$savedPos,
// @ts-ignore
      end: peg$currPos
    };
  }

// @ts-ignore
  function location() {
// @ts-ignore
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

// @ts-ignore
  function expected(description, location) {
// @ts-ignore
    location = location !== undefined
// @ts-ignore
      ? location
// @ts-ignore
      : peg$computeLocation(peg$savedPos, peg$currPos);

// @ts-ignore
    throw peg$buildStructuredError(
// @ts-ignore
      [peg$otherExpectation(description)],
// @ts-ignore
      input.substring(peg$savedPos, peg$currPos),
// @ts-ignore
      location
    );
  }

// @ts-ignore
  function error(message, location) {
// @ts-ignore
    location = location !== undefined
// @ts-ignore
      ? location
// @ts-ignore
      : peg$computeLocation(peg$savedPos, peg$currPos);

// @ts-ignore
    throw peg$buildSimpleError(message, location);
  }

// @ts-ignore
  function peg$literalExpectation(text, ignoreCase) {
// @ts-ignore
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

// @ts-ignore
  function peg$classExpectation(parts, inverted, ignoreCase) {
// @ts-ignore
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

// @ts-ignore
  function peg$anyExpectation() {
// @ts-ignore
    return { type: "any" };
  }

// @ts-ignore
  function peg$endExpectation() {
// @ts-ignore
    return { type: "end" };
  }

// @ts-ignore
  function peg$otherExpectation(description) {
// @ts-ignore
    return { type: "other", description: description };
  }

// @ts-ignore
  function peg$computePosDetails(pos) {
// @ts-ignore
    var details = peg$posDetailsCache[pos];
// @ts-ignore
    var p;

// @ts-ignore
    if (details) {
// @ts-ignore
      return details;
// @ts-ignore
    } else {
// @ts-ignore
      p = pos - 1;
// @ts-ignore
      while (!peg$posDetailsCache[p]) {
// @ts-ignore
        p--;
      }

// @ts-ignore
      details = peg$posDetailsCache[p];
// @ts-ignore
      details = {
// @ts-ignore
        line: details.line,
// @ts-ignore
        column: details.column
      };

// @ts-ignore
      while (p < pos) {
// @ts-ignore
        if (input.charCodeAt(p) === 10) {
// @ts-ignore
          details.line++;
// @ts-ignore
          details.column = 1;
// @ts-ignore
        } else {
// @ts-ignore
          details.column++;
        }

// @ts-ignore
        p++;
      }

// @ts-ignore
      peg$posDetailsCache[pos] = details;

// @ts-ignore
      return details;
    }
  }

// @ts-ignore
  function peg$computeLocation(startPos, endPos, offset) {
// @ts-ignore
    var startPosDetails = peg$computePosDetails(startPos);
// @ts-ignore
    var endPosDetails = peg$computePosDetails(endPos);

// @ts-ignore
    var res = {
// @ts-ignore
      source: peg$source,
// @ts-ignore
      start: {
// @ts-ignore
        offset: startPos,
// @ts-ignore
        line: startPosDetails.line,
// @ts-ignore
        column: startPosDetails.column
      },
// @ts-ignore
      end: {
// @ts-ignore
        offset: endPos,
// @ts-ignore
        line: endPosDetails.line,
// @ts-ignore
        column: endPosDetails.column
      }
    };
// @ts-ignore
    if (offset && peg$source && (typeof peg$source.offset === "function")) {
// @ts-ignore
      res.start = peg$source.offset(res.start);
// @ts-ignore
      res.end = peg$source.offset(res.end);
    }
// @ts-ignore
    return res;
  }

// @ts-ignore
  function peg$fail(expected) {
// @ts-ignore
    if (peg$currPos < peg$maxFailPos) { return; }

// @ts-ignore
    if (peg$currPos > peg$maxFailPos) {
// @ts-ignore
      peg$maxFailPos = peg$currPos;
// @ts-ignore
      peg$maxFailExpected = [];
    }

// @ts-ignore
    peg$maxFailExpected.push(expected);
  }

// @ts-ignore
  function peg$buildSimpleError(message, location) {
// @ts-ignore
    return new peg$SyntaxError(message, null, null, location);
  }

// @ts-ignore
  function peg$buildStructuredError(expected, found, location) {
// @ts-ignore
    return new peg$SyntaxError(
// @ts-ignore
      peg$SyntaxError.buildMessage(expected, found),
// @ts-ignore
      expected,
// @ts-ignore
      found,
// @ts-ignore
      location
    );
  }

// @ts-ignore
  function // @ts-ignore
peg$parseContent() {
// @ts-ignore
    var s0, s1;

// @ts-ignore
    s0 = [];
// @ts-ignore
    s1 = peg$parseElement();
// @ts-ignore
    if (s1 === peg$FAILED) {
// @ts-ignore
      s1 = peg$parseText();
    }
// @ts-ignore
    while (s1 !== peg$FAILED) {
// @ts-ignore
      s0.push(s1);
// @ts-ignore
      s1 = peg$parseElement();
// @ts-ignore
      if (s1 === peg$FAILED) {
// @ts-ignore
        s1 = peg$parseText();
      }
    }

// @ts-ignore
    return s0;
  }

// @ts-ignore
  function // @ts-ignore
peg$parseElement() {
// @ts-ignore
    var s0, s1, s2, s3;

// @ts-ignore
    s0 = peg$currPos;
// @ts-ignore
    s1 = peg$parseStartTag();
// @ts-ignore
    if (s1 !== peg$FAILED) {
// @ts-ignore
      s2 = peg$parseContent();
// @ts-ignore
      if (s2 !== peg$FAILED) {
// @ts-ignore
        s3 = peg$parseEndTag();
// @ts-ignore
        if (s3 !== peg$FAILED) {
// @ts-ignore
          peg$savedPos = s0;
// @ts-ignore
          s0 = peg$f0(s1, s2, s3);
// @ts-ignore
        } else {
// @ts-ignore
          peg$currPos = s0;
// @ts-ignore
          s0 = peg$FAILED;
        }
// @ts-ignore
      } else {
// @ts-ignore
        peg$currPos = s0;
// @ts-ignore
        s0 = peg$FAILED;
      }
// @ts-ignore
    } else {
// @ts-ignore
      peg$currPos = s0;
// @ts-ignore
      s0 = peg$FAILED;
    }

// @ts-ignore
    return s0;
  }

// @ts-ignore
  function // @ts-ignore
peg$parseStartTag() {
// @ts-ignore
    var s0, s1, s2, s3, s4;

// @ts-ignore
    s0 = peg$currPos;
// @ts-ignore
    if (input.charCodeAt(peg$currPos) === 91) {
// @ts-ignore
      s1 = peg$c0;
// @ts-ignore
      peg$currPos++;
// @ts-ignore
    } else {
// @ts-ignore
      s1 = peg$FAILED;
// @ts-ignore
      if (peg$silentFails === 0) { peg$fail(peg$e0); }
    }
// @ts-ignore
    if (s1 !== peg$FAILED) {
// @ts-ignore
      s2 = peg$parseTagName();
// @ts-ignore
      if (s2 !== peg$FAILED) {
// @ts-ignore
        s3 = peg$parseVariant();
// @ts-ignore
        if (s3 === peg$FAILED) {
// @ts-ignore
          s3 = null;
        }
// @ts-ignore
        if (input.charCodeAt(peg$currPos) === 93) {
// @ts-ignore
          s4 = peg$c1;
// @ts-ignore
          peg$currPos++;
// @ts-ignore
        } else {
// @ts-ignore
          s4 = peg$FAILED;
// @ts-ignore
          if (peg$silentFails === 0) { peg$fail(peg$e1); }
        }
// @ts-ignore
        if (s4 !== peg$FAILED) {
// @ts-ignore
          peg$savedPos = s0;
// @ts-ignore
          s0 = peg$f1(s2, s3);
// @ts-ignore
        } else {
// @ts-ignore
          peg$currPos = s0;
// @ts-ignore
          s0 = peg$FAILED;
        }
// @ts-ignore
      } else {
// @ts-ignore
        peg$currPos = s0;
// @ts-ignore
        s0 = peg$FAILED;
      }
// @ts-ignore
    } else {
// @ts-ignore
      peg$currPos = s0;
// @ts-ignore
      s0 = peg$FAILED;
    }

// @ts-ignore
    return s0;
  }

// @ts-ignore
  function // @ts-ignore
peg$parseEndTag() {
// @ts-ignore
    var s0, s1, s2, s3;

// @ts-ignore
    s0 = peg$currPos;
// @ts-ignore
    if (input.substr(peg$currPos, 2) === peg$c2) {
// @ts-ignore
      s1 = peg$c2;
// @ts-ignore
      peg$currPos += 2;
// @ts-ignore
    } else {
// @ts-ignore
      s1 = peg$FAILED;
// @ts-ignore
      if (peg$silentFails === 0) { peg$fail(peg$e2); }
    }
// @ts-ignore
    if (s1 !== peg$FAILED) {
// @ts-ignore
      s2 = peg$parseTagName();
// @ts-ignore
      if (s2 !== peg$FAILED) {
// @ts-ignore
        if (input.charCodeAt(peg$currPos) === 93) {
// @ts-ignore
          s3 = peg$c1;
// @ts-ignore
          peg$currPos++;
// @ts-ignore
        } else {
// @ts-ignore
          s3 = peg$FAILED;
// @ts-ignore
          if (peg$silentFails === 0) { peg$fail(peg$e1); }
        }
// @ts-ignore
        if (s3 !== peg$FAILED) {
// @ts-ignore
          peg$savedPos = s0;
// @ts-ignore
          s0 = peg$f2(s2);
// @ts-ignore
        } else {
// @ts-ignore
          peg$currPos = s0;
// @ts-ignore
          s0 = peg$FAILED;
        }
// @ts-ignore
      } else {
// @ts-ignore
        peg$currPos = s0;
// @ts-ignore
        s0 = peg$FAILED;
      }
// @ts-ignore
    } else {
// @ts-ignore
      peg$currPos = s0;
// @ts-ignore
      s0 = peg$FAILED;
    }

// @ts-ignore
    return s0;
  }

// @ts-ignore
  function // @ts-ignore
peg$parseTagName() {
// @ts-ignore
    var s0;

// @ts-ignore
    if (input.charCodeAt(peg$currPos) === 99) {
// @ts-ignore
      s0 = peg$c3;
// @ts-ignore
      peg$currPos++;
// @ts-ignore
    } else {
// @ts-ignore
      s0 = peg$FAILED;
// @ts-ignore
      if (peg$silentFails === 0) { peg$fail(peg$e3); }
    }
// @ts-ignore
    if (s0 === peg$FAILED) {
// @ts-ignore
      if (input.charCodeAt(peg$currPos) === 105) {
// @ts-ignore
        s0 = peg$c4;
// @ts-ignore
        peg$currPos++;
// @ts-ignore
      } else {
// @ts-ignore
        s0 = peg$FAILED;
// @ts-ignore
        if (peg$silentFails === 0) { peg$fail(peg$e4); }
      }
// @ts-ignore
      if (s0 === peg$FAILED) {
// @ts-ignore
        if (input.charCodeAt(peg$currPos) === 117) {
// @ts-ignore
          s0 = peg$c5;
// @ts-ignore
          peg$currPos++;
// @ts-ignore
        } else {
// @ts-ignore
          s0 = peg$FAILED;
// @ts-ignore
          if (peg$silentFails === 0) { peg$fail(peg$e5); }
        }
// @ts-ignore
        if (s0 === peg$FAILED) {
// @ts-ignore
          if (input.charCodeAt(peg$currPos) === 115) {
// @ts-ignore
            s0 = peg$c6;
// @ts-ignore
            peg$currPos++;
// @ts-ignore
          } else {
// @ts-ignore
            s0 = peg$FAILED;
// @ts-ignore
            if (peg$silentFails === 0) { peg$fail(peg$e6); }
          }
// @ts-ignore
          if (s0 === peg$FAILED) {
// @ts-ignore
            if (input.charCodeAt(peg$currPos) === 126) {
// @ts-ignore
              s0 = peg$c7;
// @ts-ignore
              peg$currPos++;
// @ts-ignore
            } else {
// @ts-ignore
              s0 = peg$FAILED;
// @ts-ignore
              if (peg$silentFails === 0) { peg$fail(peg$e7); }
            }
// @ts-ignore
            if (s0 === peg$FAILED) {
// @ts-ignore
              if (input.charCodeAt(peg$currPos) === 94) {
// @ts-ignore
                s0 = peg$c8;
// @ts-ignore
                peg$currPos++;
// @ts-ignore
              } else {
// @ts-ignore
                s0 = peg$FAILED;
// @ts-ignore
                if (peg$silentFails === 0) { peg$fail(peg$e8); }
              }
            }
          }
        }
      }
    }

// @ts-ignore
    return s0;
  }

// @ts-ignore
  function // @ts-ignore
peg$parseVariant() {
// @ts-ignore
    var s0, s1, s2, s3;

// @ts-ignore
    s0 = peg$currPos;
// @ts-ignore
    s1 = peg$currPos;
// @ts-ignore
    s2 = [];
// @ts-ignore
    if (input.charCodeAt(peg$currPos) === 32) {
// @ts-ignore
      s3 = peg$c9;
// @ts-ignore
      peg$currPos++;
// @ts-ignore
    } else {
// @ts-ignore
      s3 = peg$FAILED;
// @ts-ignore
      if (peg$silentFails === 0) { peg$fail(peg$e9); }
    }
// @ts-ignore
    while (s3 !== peg$FAILED) {
// @ts-ignore
      s2.push(s3);
// @ts-ignore
      if (s2.length >= 1) {
// @ts-ignore
        s3 = peg$FAILED;
// @ts-ignore
      } else {
// @ts-ignore
        if (input.charCodeAt(peg$currPos) === 32) {
// @ts-ignore
          s3 = peg$c9;
// @ts-ignore
          peg$currPos++;
// @ts-ignore
        } else {
// @ts-ignore
          s3 = peg$FAILED;
// @ts-ignore
          if (peg$silentFails === 0) { peg$fail(peg$e9); }
        }
      }
    }
// @ts-ignore
    if (s2.length < 1) {
// @ts-ignore
      peg$currPos = s1;
// @ts-ignore
      s1 = peg$FAILED;
// @ts-ignore
    } else {
// @ts-ignore
      s1 = s2;
    }
// @ts-ignore
    if (s1 !== peg$FAILED) {
// @ts-ignore
      if (input.substr(peg$currPos, 7) === peg$c10) {
// @ts-ignore
        s2 = peg$c10;
// @ts-ignore
        peg$currPos += 7;
// @ts-ignore
      } else {
// @ts-ignore
        s2 = peg$FAILED;
// @ts-ignore
        if (peg$silentFails === 0) { peg$fail(peg$e10); }
      }
// @ts-ignore
      if (s2 === peg$FAILED) {
// @ts-ignore
        if (input.substr(peg$currPos, 7) === peg$c11) {
// @ts-ignore
          s2 = peg$c11;
// @ts-ignore
          peg$currPos += 7;
// @ts-ignore
        } else {
// @ts-ignore
          s2 = peg$FAILED;
// @ts-ignore
          if (peg$silentFails === 0) { peg$fail(peg$e11); }
        }
// @ts-ignore
        if (s2 === peg$FAILED) {
// @ts-ignore
          if (input.substr(peg$currPos, 6) === peg$c12) {
// @ts-ignore
            s2 = peg$c12;
// @ts-ignore
            peg$currPos += 6;
// @ts-ignore
          } else {
// @ts-ignore
            s2 = peg$FAILED;
// @ts-ignore
            if (peg$silentFails === 0) { peg$fail(peg$e12); }
          }
        }
      }
// @ts-ignore
      if (s2 !== peg$FAILED) {
// @ts-ignore
        peg$savedPos = s0;
// @ts-ignore
        s0 = peg$f3(s2);
// @ts-ignore
      } else {
// @ts-ignore
        peg$currPos = s0;
// @ts-ignore
        s0 = peg$FAILED;
      }
// @ts-ignore
    } else {
// @ts-ignore
      peg$currPos = s0;
// @ts-ignore
      s0 = peg$FAILED;
    }

// @ts-ignore
    return s0;
  }

// @ts-ignore
  function // @ts-ignore
peg$parseText() {
// @ts-ignore
    var s0, s1, s2;

// @ts-ignore
    s0 = peg$currPos;
// @ts-ignore
    s1 = [];
// @ts-ignore
    if (peg$r0.test(input.charAt(peg$currPos))) {
// @ts-ignore
      s2 = input.charAt(peg$currPos);
// @ts-ignore
      peg$currPos++;
// @ts-ignore
    } else {
// @ts-ignore
      s2 = peg$FAILED;
// @ts-ignore
      if (peg$silentFails === 0) { peg$fail(peg$e13); }
    }
// @ts-ignore
    if (s2 !== peg$FAILED) {
// @ts-ignore
      while (s2 !== peg$FAILED) {
// @ts-ignore
        s1.push(s2);
// @ts-ignore
        if (peg$r0.test(input.charAt(peg$currPos))) {
// @ts-ignore
          s2 = input.charAt(peg$currPos);
// @ts-ignore
          peg$currPos++;
// @ts-ignore
        } else {
// @ts-ignore
          s2 = peg$FAILED;
// @ts-ignore
          if (peg$silentFails === 0) { peg$fail(peg$e13); }
        }
      }
// @ts-ignore
    } else {
// @ts-ignore
      s1 = peg$FAILED;
    }
// @ts-ignore
    if (s1 !== peg$FAILED) {
// @ts-ignore
      peg$savedPos = s0;
// @ts-ignore
      s1 = peg$f4(s1);
    }
// @ts-ignore
    s0 = s1;

// @ts-ignore
    return s0;
  }

// @ts-ignore
  peg$result = peg$startRuleFunction();

// @ts-ignore
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
// @ts-ignore
    return peg$result;
// @ts-ignore
  } else {
// @ts-ignore
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
// @ts-ignore
      peg$fail(peg$endExpectation());
    }

// @ts-ignore
    throw peg$buildStructuredError(
// @ts-ignore
      peg$maxFailExpected,
// @ts-ignore
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
// @ts-ignore
      peg$maxFailPos < input.length
// @ts-ignore
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
// @ts-ignore
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

// @ts-ignore
  return {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
  };
})()

export interface FilePosition {
  offset: number;
  line: number;
  column: number;
}

export interface FileRange {
  start: FilePosition;
  end: FilePosition;
  source: string;
}

export interface LiteralExpectation {
  type: "literal";
  text: string;
  ignoreCase: boolean;
}

export interface ClassParts extends Array<string | ClassParts> {}

export interface ClassExpectation {
  type: "class";
  parts: ClassParts;
  inverted: boolean;
  ignoreCase: boolean;
}

export interface AnyExpectation {
  type: "any";
}

export interface EndExpectation {
  type: "end";
}

export interface OtherExpectation {
  type: "other";
  description: string;
}

export type Expectation = LiteralExpectation | ClassExpectation | AnyExpectation | EndExpectation | OtherExpectation;

declare class _PeggySyntaxError extends Error {
  public static buildMessage(expected: Expectation[], found: string | null): string;
  public message: string;
  public expected: Expectation[];
  public found: string | null;
  public location: FileRange;
  public name: string;
  constructor(message: string, expected: Expectation[], found: string | null, location: FileRange);
  format(sources: {
    source?: any;
    text: string;
  }[]): string;
}

export interface TraceEvent {
    type: string;
    rule: string;
    result?: any;
    location: FileRange;
  }

declare class _DefaultTracer {
  private indentLevel: number;
  public trace(event: TraceEvent): void;
}

peggyParser.SyntaxError.prototype.name = "PeggySyntaxError";

export interface ParseOptions {
  filename?: string;
  startRule?: "Content";
  tracer?: any;
  [key: string]: any;
}
export type ParseFunction = <Options extends ParseOptions>(
    input: string,
    options?: Options
  ) => Options extends { startRule: infer StartRule } ?
    StartRule extends "Content" ? Content : Content
    : Content;
export const parse: ParseFunction = peggyParser.parse;

export const PeggySyntaxError = peggyParser.SyntaxError as typeof _PeggySyntaxError;

export type PeggySyntaxError = _PeggySyntaxError;

// These types were autogenerated by ts-pegjs
export type Content = (Element | Text)[];
export type Element = { tag: StartTag; content: Content };
export type StartTag =
  | { name: TagName; variant: NonNullable<Variant | null> }
  | { name: TagName; variant?: undefined };
export type EndTag = TagName;
export type TagName = "c" | "i" | "u" | "s" | "~" | "^";
export type Variant = "success" | "warning" | "danger";
export type Text = string;
