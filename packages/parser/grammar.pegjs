Content
  = (Element / Text)*

Element
  = startTag:StartTag content:Content endTag:EndTag {
    if (startTag.name !== endTag) {
      throw new Error(
        "Expected [/" + startTag.name + "] but [/" + endTag + "] found."
      );
    }

    return {
      tag: startTag,
      content: content
    };
  }

StartTag
  = "[" name:TagName variant:Variant? "]" { 
  	if (name !== 'c' && variant) {
    	throw new Error(
          '[' + name + ']' + ' cannot have \"' + variant + '\" as property'
        )
    }
    
    if (name === 'c' && !variant) {
	    throw new Error(
        	'[' + name + ']' + ' must have a variant property'
        )
    }

  	return variant ? { name, variant } : { name };
  }

EndTag
  = "[/" name:TagName "]" { return name; }

TagName
  = 'c'/'i'/'u'/'s'/'~'/'^'

Variant
  = ' '|1| variant:('success'/'warning'/'danger') { return variant }

Text
  = chars:[^[]+  { return chars.join(""); }
