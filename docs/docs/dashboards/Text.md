Drag the text icon from the toolbar onto your dashboard to add a new text block.

![Adding text to dashboard](imgs/add-text.gif){:style="max-width:80%"}

## Markdown

You can style text using [markdown](https://commonmark.org/help/).
Glean handles the exact styles to look good on every device.

#### Code Blocks

You can use code blocks to place any important technical context directly in
the dashboard. If you specify a programming language, Glean will apply
syntax highlighting to it.

For example:

    ```sql
    SELECT * FROM my_table;
    ```

becomes:

```sql
SELECT * FROM my_table;
```

`sql`, `r`, `python`, and `javascript` are supported.
