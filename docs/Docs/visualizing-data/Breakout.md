Breaking out an attribute in Glean adds that attribute as a layer in the visualization.  In a timeseries bar chart for example, you would add that attribute as the color series in the attribute.

![Breaking out an attribute](/assets/breakout4.gif)

## Adding and removing a breakout

- **From the Attribute Panel:** The easiest way to breakout an attribute is to select the Breakout button from any attribute panel in the [Attributes tray](Attributes-Tray.md).
- **From the top Control Bar:** You can quickly view or remove a breakout from the top control bar just about your chart.
- **From the configuration Panel:** As with another data configuration, you can always view and remove a breakout by clicking the `Configuration` tab on the right hand panel.

## Adding breakout items

Glean visualizes the top six items in your attribute by default, the rest of the items are bucketed together into an `Other` category.  This allows you to visualize the distribution of very high-[cardinality](https://en.wikipedia.org/wiki/Cardinality) columns easily.  You can always add more groups if you want in the attribute panel, but generally, you shouldn't visualize too many items at a time - this is why we pick a low number as a default.  You can control the number of groups from the attribute panel, see the [Attributes tray](Attributes-Tray.md) page for more details.

## Colors

Colors for your series are selected automatically by Glean with a range of colors that is designed to vary by hue and luminosity so that it's easy to tell groups apart.  The color scale is not optimized for more than six groups, although we'll try to do something reasonable with any number of groups.

Glean does not yet support customizing chart colors.

## Hiding the Other category

Sometimes you might want to hide the other category to make the comparison between items more clear.  To hide the other category click the `hide other` button at the bottom of the attribute tray.
