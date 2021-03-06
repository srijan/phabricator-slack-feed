'use strict';

/**
 * Class PhidFetcher
 *
 * Gets information about PHIDs
 */
class PhidFetcher
{
    /**
     * Construct an instance of a PhidFetcher
     *
     * @param Conduit
     */
    constructor (Conduit)
    {
        this.conduit = Conduit;
    }

    /**
     * Go and fetch information about a PHID from Conduit
     *
     * @param phid
     * @param callback
     */
    fetch (phid, callback)
    {
        this.conduit.exec(
            'phid.query',
            {
                "phids": {
                    "0": phid
                }
            },
            (err, response) => {
                if (err) {
                    callback(err);
                }

                // This call will return a hash of ids and objects so we need to
                // get the first key
                var keys = Object.keys(response);

                callback(null, response[keys[0]]);
            }
        )
    }
}

module.exports = PhidFetcher;
