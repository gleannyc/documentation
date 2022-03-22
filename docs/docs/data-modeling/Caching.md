By default, query results are cached in Glean for four hours, but this is configurable for each data model with the Time To Live (TTL) configuration.

## What is the caching Time To Live (TTL)?

Once a query is run from Glean, the results are stored in an in-memory cache on our servers so that users don't have to access the database again for the same query. The Time To Live (TTL) setting allows you to control how long Glean uses that stored data before executing the query again.

If you leave the TTL configuration blank, we will default the TTL for this data model to 4 hours.

If you set this to 1, then the cache will effectively be disabled (data will only be retained for one second).

## Changing caching Time To Live (TTL)

1. Goto the [data models page](https://glean.io/app/p/data-models)
2. Click the edit button for the data model you want to update.
3. Click on the `⚙️ Configuration` tab on the data model.
4. Change the `Cache TTL` 

## Local cache

Glean is able to keep a copy of cached data in your web browser while you are logged in so that exploring data feels incredibly fast.  The above caching rules also apply to this local browser cache.  If you make make the caching Time To Live very short, it may make normal operations like filtering and removing a filter feel slow.
