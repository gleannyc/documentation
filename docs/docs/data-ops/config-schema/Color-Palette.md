## Example

```yaml
glean: "1.0"
type: color_palette
name: "Papaya"
options:
additionalColorGeneration: "interpolate"
colors:
  - color: "papayawhip"
  - color: "rgb(99, 191, 94)"
  - color: "#f5bf42"
```

## Properties

- **`glean`** _(string - required)_: The Glean file format version.
- **`type`** _(string - required)_: The type of this resource. For color palettes, this is always `"color_palette"`.
- **`grn`** *(string)*: If specified, this config will be applied to an existing resource with the matching [GRN](../GRNs.md),
  instead of managing a new color palette.
- **`name`** _(string - required)_: The user-facing name of this color palette.
- **[`colors`](#colors)** _(array - required)_: A list of objects describing the colors in the palette

### Colors

**Colors** are objects comprised of the following properties:

- **`color`** _(string - required)_: Color definition in hex, rgb, or [CSS color keyword](https://www.w3.org/wiki/CSS/Properties/color/keywords){:target="\_blank"}
- **`name`** _(string)_: Custom name for the color
