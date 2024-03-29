By default, query results are cached in Glean for four hours, but this is configurable for each data model with the Time To Live (TTL) configuration.

## What is the caching Time To Live (TTL)?

Once a query is run from Glean, the results are stored in an in-memory cache on our servers so that users don't have to access the database again for the same query. The Time To Live (TTL) setting allows you to control how long Glean uses that stored data before executing the query again.

If you leave the TTL configuration blank, we will default the TTL for this data model to 4 hours.

If you set this to 1, then the cache will effectively be disabled (data will only be retained for one second).

!!! info "Local cache"
    Glean keeps a copy of cached data in your web browser while you are logged in so that exploring data feels incredibly fast.  The above caching rules also apply to this local browser cache.  If you make make the caching Time To Live very short, it may make normal operations like filtering and removing a filter feel slow.

## Changing caching Time To Live (TTL)

1. Go to the [data models page]({{ glean_url }}/app/p/data-models){:target="_blank"}
2. Click the edit button for the data model you want to update.
3. Open `⚙️ Advanced Settings` via the `...` menu in the top right.
4. Change the `Cache TTL`

## Manually clearing the cache

Sometimes, you may know that the data a model uses has changed before Glean does. For example, after running an updated DBT pipeline.
While you could just wait for the cache to expire (based on the TTL setting above), you can also immediately clear the cache for a given model.

You can reset the model's cache using the [Glean CLI](../data-ops/Using-the-Glean-CLI.md):
```
glean cache clear m:MODEL_ID
```

Alternatively, you can reset the model's cache in the UI:

1. Go to the [data models page]({{ glean_url }}/app/p/data-models){:target="_blank"}
2. Click the edit button for the data model you want to update.
3. Open `⚙️ Advanced Settings` via the `...` menu in the top right.
4. Click the `remove all cached queries` button beside the TTL input.


