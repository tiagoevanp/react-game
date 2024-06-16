{{
	const checkVariant = (variant) => {
      if (!variant) {
        throw new Error(
          '[' + name + ']' + ' must have a variant property'
        )
      }
      
      return true;
    }
}}

Content
  = (Element/Text)*

Element
  = startTag:(StartTag/StartColorTag/StartVelocityTag) content:Content endTag:EndTag {
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
  = "[" name:Tag "]" { return { name } }
  
StartColorTag
  = "[" name:ColorTag variant:ColorVariant "]" {
	checkVariant(variant)

  	return { name, variant }
  }

StartVelocityTag
  = "[" name:VelocityTag variant:VelocityVariant "]" {
    checkVariant(variant);

	return { name, variant };
  }

EndTag
  = "[/" @name:(Tag/ColorTag/VelocityTag) "]"

Tag
  = 'i'/'u'/'s'/'~'/'^'
  
ColorTag
  = 'c'
  
VelocityTag
  = 'v'

ColorVariant
  = ' '|1| @variant:('success'/'warning'/'danger')

VelocityVariant
  = ' '|1| @variant:('512'/'256'/'128'/'64'/'32'/'16'/'8'/'4'/'2')

Text
  = chars:$[^[]+
