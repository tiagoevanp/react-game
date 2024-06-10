Content
  = (Element / Text)*

Element
  = startTag:StartTag content:Content endTag:EndTag {
    if (startTag != endTag) {
      throw new Error(
        "Expected [/" + startTag + "] but [/" + endTag + "] found."
      );
    }

    return {
      name:    startTag,
      content: content
    };
  }

StartTag
  = "[" name:TagName "]" { return name; }

EndTag
  = "[/" name:TagName "]" { return name; }

TagName
  = 'i'/'u'/'s'/'danger'

Text
  = chars:[^[]+  { return chars.join(""); }
