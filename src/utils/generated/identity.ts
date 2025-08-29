export interface paths {
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Passed */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            status: number;
                            info?: {
                                [key: string]: unknown;
                            };
                            stats?: {
                                createTime?: string;
                                upTime?: string;
                                memory?: {
                                    rss?: number;
                                    heapTotal?: number;
                                    heapUsed?: number;
                                    external?: number;
                                    arrayBuffers?: number;
                                };
                            };
                            computedChecks?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
                /** @description Failed */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            status: number;
                            info?: {
                                [key: string]: unknown;
                            };
                            stats?: {
                                createTime?: string;
                                upTime?: string;
                                memory?: {
                                    rss?: number;
                                    heapTotal?: number;
                                    heapUsed?: number;
                                    external?: number;
                                    arrayBuffers?: number;
                                };
                            };
                            computedChecks?: {
                                [key: string]: unknown;
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/userinfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get user authorization information
         * @description
         *     Get user authorization information that will be helpful for other services to authorize their users.
         *
         *     ## accessibleTeams
         *
         *     The `accessibleTeams` object contains all teams the user has access to, determined by:
         *
         *     - **Lead access**
         *       If the user is a _LEAD_ on a team, they get access to that team **and** _all_ of its descendants.
         *     - **Member access** (temporary via feature flag)
         *       If the user is a _MEMBER_ and the feature flag is enabled, they get access to their team **and** _all_ of its descendants.
         *
         *     ## Root Teams
         *
         *     The `roots` array contains teams for which the user has _direct_ membership
         *     and _no_ ancestor on which they already have a role of _LEAD_ or _MEMBER_.
         *
         *     ## Example Team Structure
         *
         *     ```text
         *     Team1 (LEAD)
         *       → Team1a (MEMBER)
         *         → Team1aa
         *       → Team1b
         *         → Team1bb (LEAD)
         *     Team2
         *     Team3 (AGENT)
         *       → Team3a
         *         → Team3aa (MEMBER)
         *           → Team3aaa (LEAD)
         *             → Team3aaaa (MEMBER)
         *               → Team3aaaaa
         *             → Team3bbbb (AGENT)
         *     ```
         *
         *     ## Example Response
         *
         *     ```json
         *     {
         *       "...existingFields": "...",
         *       "accessibleTeams": {
         *         "roots": [
         *           "team-id-1",
         *           "team-id-3",
         *           "team-id-3aa"
         *         ],
         *         "nodes": {
         *           "team-id-1": {
         *             "childIds":  [
         *               "team-id-1a",
         *               "team-id-1b"
         *             ]
         *           },
         *           "team-id-1a": {
         *             "childIds":  [
         *               "team-id-1aa"
         *             ]
         *           },
         *           "team-id-1b": {
         *             "childIds":  [
         *               "team-id-1bb"
         *             ]
         *           },
         *           "team-id-1bb": {
         *             "childIds":  [] // no children
         *           },
         *           "team-id-3": {
         *             "childIds":  [] // AGENT role cannot see children
         *           },
         *           "team-id-3aa": {
         *             "childIds":  ["team-3aaa"] // MEMBER with feature flag shows children
         *           },
         *           "team-id-3aaa": {
         *             "childIds":  ["team-3aaaa", "team-3bbbb"] // LEAD role shows children
         *           },
         *           "team-id-3aaaa": {
         *             "childIds":  ["team-3aaaaa"] // parent with MEMBER role and feature flag enabled shows children
         *           },
         *           "team-id-3aaaaa": {
         *             "childIds":  [] // no children
         *           },
         *           "team-id-3bbbb": {
         *             "childIds":  [] // AGENT role cannot see children
         *           },
         *         }
         *       }
         *     }
         *     ```
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            externalId?: string | null;
                            legacyExternalId?: string | null;
                            firstName: string;
                            lastName: string;
                            displayName: string;
                            photoUrl?: string | null;
                            logins: {
                                id: string;
                                externalId?: string | null;
                                provider: string;
                                userName: string;
                                email: string;
                            }[];
                            roles: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                            teams: {
                                /** Format: uuid */
                                id: string;
                                externalId?: string | null;
                                legacyExternalId: string | null;
                                roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                                /** @enum {string} */
                                market?: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            }[];
                            accessibleTeams?: {
                                roots: string[];
                                nodes: {
                                    [key: string]: {
                                        alias: string;
                                        legalName: string;
                                        /** @enum {string} */
                                        market?: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                        childIds: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/zendesk/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            token: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        street1: string;
                        street2?: string | null;
                        city: string;
                        /** @enum {string} */
                        state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                        postalCode: string;
                        county?: string;
                        /** @enum {string} */
                        country?: "US";
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            street1: string;
                            street2: string;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county: string;
                            /** @enum {string} */
                            country: "US";
                            geoLocationLatitude: string;
                            geoLocationLongitude: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/addresses/{addressId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    addressId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            street1: string;
                            street2: string;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county: string;
                            /** @enum {string} */
                            country: "US";
                            geoLocationLatitude: string;
                            geoLocationLongitude: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/brokerages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    after?: string;
                    before?: string;
                    limit?: number;
                    search?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            paging: {
                                cursors: {
                                    after: string;
                                    before: string;
                                };
                                next: null | string;
                                previous: null | string;
                            };
                            data: {
                                id: string;
                                name: string;
                                phoneNumber?: string | null;
                                address?: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                } | null;
                                /** @enum {string} */
                                market: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                /** @enum {string} */
                                type: "STANDARD" | "LFRO";
                                license: {
                                    /** Format: date-time */
                                    expiration: string;
                                    number: string;
                                };
                                managingBroker: {
                                    userId: string;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string;
                                    };
                                    license: {
                                        /** Format: uuid */
                                        id: string;
                                        number: string;
                                        /** Format: date-time */
                                        expiration: string;
                                        /** @enum {string} */
                                        state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    };
                                } | null;
                                createdBy?: string | null;
                                createdAt?: string | null;
                                updatedBy?: string | null;
                                updatedAt?: string | null;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        name: string;
                        licenseNumber: string;
                        /** Format: date-time */
                        licenseExpiration: string;
                        phoneNumber: string;
                        /** @enum {string} */
                        market: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                        /** @enum {string} */
                        type?: "STANDARD" | "LFRO";
                        /** Format: uuid */
                        addressId?: string;
                        address?: {
                            street1: string;
                            street2?: string | null;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county?: string;
                            /** @enum {string} */
                            country?: "US";
                        };
                        /** Format: uuid */
                        brokerUserId: string;
                        /** Format: email */
                        brokerEmail: string;
                        brokerPhone: string;
                        /** Format: uuid */
                        brokerLicenseId: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            phoneNumber?: string | null;
                            address?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            /** @enum {string} */
                            market: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** @enum {string} */
                            type: "STANDARD" | "LFRO";
                            license: {
                                /** Format: date-time */
                                expiration: string;
                                number: string;
                            };
                            managingBroker: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "INVALID_PHONE_NUMBER";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "MULTIPLE_ADDRESS_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BROKER_DETAILS_DOES_NOT_MATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/brokerages/{brokerageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    brokerageId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            phoneNumber?: string | null;
                            address?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            /** @enum {string} */
                            market: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** @enum {string} */
                            type: "STANDARD" | "LFRO";
                            license: {
                                /** Format: date-time */
                                expiration: string;
                                number: string;
                            };
                            managingBroker: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    brokerageId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            phoneNumber?: string | null;
                            address?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            /** @enum {string} */
                            market: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** @enum {string} */
                            type: "STANDARD" | "LFRO";
                            license: {
                                /** Format: date-time */
                                expiration: string;
                                number: string;
                            };
                            managingBroker: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_DELETED";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    brokerageId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                        licenseNumber?: string;
                        /** Format: date-time */
                        licenseExpiration?: string;
                        phoneNumber?: string;
                        /** @enum {string} */
                        market?: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                        /** Format: uuid */
                        addressId?: string;
                        address?: {
                            street1: string;
                            street2?: string | null;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county?: string;
                            /** @enum {string} */
                            country?: "US";
                        };
                        /** Format: uuid */
                        brokerUserId?: string;
                        /** Format: email */
                        brokerEmail?: string;
                        brokerPhone?: string;
                        /** Format: uuid */
                        brokerLicenseId?: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            phoneNumber?: string | null;
                            address?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            /** @enum {string} */
                            market: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** @enum {string} */
                            type: "STANDARD" | "LFRO";
                            license: {
                                /** Format: date-time */
                                expiration: string;
                                number: string;
                            };
                            managingBroker: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "INVALID_PHONE_NUMBER";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "MULTIPLE_ADDRESS_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BROKER_DETAILS_DOES_NOT_MATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/etl/team-members/{externalId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    externalId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            userId: string;
                            /** Format: uuid */
                            teamId: string;
                            externalId?: string | null;
                            legacyExternalId?: string | null;
                            contact: {
                                email: string;
                                phone?: string | null;
                            };
                            roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                            license?: {
                                /** Format: uuid */
                                id: string;
                                number: string;
                                /** Format: date-time */
                                expiration: string;
                                /** @enum {string} */
                                state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            } | null;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/etl/mergeUser": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        primaryUser: {
                            /** Format: uuid */
                            userId: string;
                            salesforceContactId?: string | null;
                            firebaseUserId?: string | null;
                        };
                        secondaryUser: {
                            /** Format: uuid */
                            userId: string;
                            salesforceContactId?: string | null;
                            firebaseUserId?: string | null;
                        };
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            userId: string;
                            /** Format: uuid */
                            teamId: string;
                            externalId?: string | null;
                            legacyExternalId?: string | null;
                            contact: {
                                email: string;
                                phone?: string | null;
                            };
                            roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                            license?: {
                                /** Format: uuid */
                                id: string;
                                number: string;
                                /** Format: date-time */
                                expiration: string;
                                /** @enum {string} */
                                state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            } | null;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/etl/addresses/hash": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            addressId: string;
                            oldHash: string;
                            newHash: string;
                        }[];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        data: {
                            context: {
                                protocol: {
                                    client: {
                                        id: string;
                                        name: string;
                                    };
                                };
                                user?: {
                                    id: string;
                                } | null;
                            };
                        };
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            commands: {
                                type: string;
                                value: {
                                    op: string;
                                    path: string;
                                    value: {
                                        id: string;
                                        legacyExternalId: string | null;
                                        displayName: string;
                                        firstName: string;
                                        lastName: string;
                                        email: string | null;
                                        loginEmail: string;
                                        photoUrl: string | null;
                                        phoneNumber: string | null;
                                        roles: string[];
                                    } | {
                                        id: string;
                                        externalId: string | null;
                                        externalIds: string[];
                                        legacyExternalIds: string[];
                                        roles: string[];
                                    };
                                }[];
                            }[];
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scim/v2/Users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    filter?: string;
                    startIndex: number;
                    count: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            Resources: {
                                id: string;
                                externalId: string;
                            }[];
                            itemsPerPage: number;
                            schemas: string[];
                            startIndex: number;
                            totalResults: number;
                        };
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        schemas: string[];
                        userName: string;
                        name: {
                            givenName: string;
                            familyName: string;
                        };
                        emails: {
                            primary: boolean;
                            value: string;
                            type: string;
                        }[];
                        locale: string;
                        externalId: string;
                        salesforceId?: string | null;
                        active: boolean;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            active: boolean;
                            externalId: string;
                            id: string;
                            name: {
                                familyName: string;
                                givenName: string;
                            };
                            emails: {
                                primary: boolean;
                                type?: string;
                                value: string;
                            }[];
                            schemas: string[];
                            userName: string;
                            salesforceId?: string;
                        };
                    };
                };
                /** @description Default Response */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            schemas: string[];
                            detail: string;
                            status: number;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/scim/v2/Users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            active: boolean;
                            externalId: string;
                            id: string;
                            name: {
                                familyName: string;
                                givenName: string;
                            };
                            emails: {
                                primary: boolean;
                                type?: string;
                                value: string;
                            }[];
                            schemas: string[];
                            userName: string;
                            salesforceId?: string;
                        };
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        active: boolean;
                        emails: {
                            primary: boolean;
                            type?: string | null;
                            value: string;
                        }[];
                        externalId: string;
                        salesforceId?: string | null;
                        id: string;
                        locale?: string | null;
                        name: {
                            familyName: string;
                            givenName: string;
                        };
                        schemas: string[];
                        userName: string;
                        groups?: string[];
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            displayName: string | null;
                            active: boolean;
                            emails: {
                                primary: boolean;
                                type?: string | null;
                                value: string;
                            }[];
                            externalId: string;
                            salesforceId?: string | null;
                            id: string;
                            locale?: string | null;
                            name: {
                                familyName: string;
                                givenName: string;
                            };
                            schemas: string[];
                            userName: string;
                            groups?: string[];
                        };
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        schemas: string[];
                        Operations: {
                            op: string;
                            value: {
                                active: boolean;
                            };
                        }[];
                    };
                };
            };
            responses: {
                /** @description Default Response */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        trace?: never;
    };
    "/team-members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    search?: string;
                    userIds?: string;
                    after?: string;
                    before?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            paging: {
                                cursors: {
                                    after: string;
                                    before: string;
                                };
                                next: null | string;
                                previous: null | string;
                            };
                            data: {
                                /** Format: uuid */
                                userId: string;
                                externalId?: string | null;
                                legacyExternalId?: string | null;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl?: string | null;
                                team: {
                                    /** Format: uuid */
                                    id: string;
                                    /** @enum {string} */
                                    status: "ACTIVE" | "INACTIVE";
                                    legalName: string;
                                    description?: string | null;
                                    email?: string | null;
                                    legacyExternalId: string | null;
                                    phoneNumber?: string | null;
                                    logoUri?: string | null;
                                    logoUriAlt: string | null;
                                    externalId: string;
                                    websiteUrl: string | null;
                                    alias: string | null;
                                    parentTeamId: string | null;
                                    mailingAddress?: {
                                        id: string;
                                        street1: string;
                                        street2: string;
                                        city: string;
                                        /** @enum {string} */
                                        state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                        postalCode: string;
                                        county: string;
                                        /** @enum {string} */
                                        country: "US";
                                        geoLocationLatitude: string;
                                        geoLocationLongitude: string;
                                    } | null;
                                    registeredAddress?: {
                                        id: string;
                                        street1: string;
                                        street2: string;
                                        city: string;
                                        /** @enum {string} */
                                        state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                        postalCode: string;
                                        county: string;
                                        /** @enum {string} */
                                        country: "US";
                                        geoLocationLatitude: string;
                                        geoLocationLongitude: string;
                                    } | null;
                                    supervisingBroker?: {
                                        userId: string;
                                        firstName: string;
                                        lastName: string;
                                        displayName: string;
                                        photoUrl: string | null;
                                        contact: {
                                            email: string;
                                            phone: string;
                                        };
                                        license: {
                                            /** Format: uuid */
                                            id: string;
                                            number: string;
                                            /** Format: date-time */
                                            expiration: string;
                                            /** @enum {string} */
                                            state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                        };
                                    } | null;
                                    brokerageId?: string | null;
                                    mlsId?: string | null;
                                    mlsOfficeEmail?: string | null;
                                    officeManager?: {
                                        userId: string;
                                        externalId: string | null;
                                        legacyExternalId: string | null;
                                        firstName: string;
                                        lastName: string;
                                        displayName: string;
                                        photoUrl: string | null;
                                        contact: {
                                            email: string;
                                            phone: string | null;
                                        };
                                        license: {
                                            /** Format: uuid */
                                            id: string;
                                            number: string;
                                            /** Format: date-time */
                                            expiration: string;
                                            /** @enum {string} */
                                            state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                        };
                                    } | null;
                                    logoHorizontalUri?: string | null;
                                    logoHorizontalUriAlt?: string | null;
                                    isCompliant: boolean;
                                    type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                                    gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                                    launchManager?: {
                                        userId: string;
                                        firstName: string;
                                        lastName: string;
                                        displayName: string;
                                        photoUrl: string | null;
                                        contact: {
                                            email: string;
                                            phone: string | null;
                                        };
                                    } | null;
                                    successManager?: {
                                        userId: string;
                                        firstName: string;
                                        lastName: string;
                                        displayName: string;
                                        photoUrl: string | null;
                                        contact: {
                                            email: string;
                                            phone: string | null;
                                        };
                                    } | null;
                                    nrdsId?: string | null;
                                };
                                contact: {
                                    email: string;
                                    phone?: string | null;
                                };
                                roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                                license?: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                } | null;
                                /** @enum {string} */
                                status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                                createdBy?: string | null;
                                createdAt?: string | null;
                                updatedBy?: string | null;
                                updatedAt?: string | null;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    experimentalAlias?: string;
                    search?: string;
                    ids?: string;
                    sort?: string;
                    after?: string;
                    before?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            paging: {
                                cursors: {
                                    after: string;
                                    before: string;
                                };
                                next: null | string;
                                previous: null | string;
                            };
                            data: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                status: "ACTIVE" | "INACTIVE";
                                legalName: string;
                                description?: string | null;
                                email?: string | null;
                                legacyExternalId: string | null;
                                phoneNumber?: string | null;
                                logoUri?: string | null;
                                logoUriAlt: string | null;
                                externalId: string;
                                websiteUrl: string | null;
                                alias: string | null;
                                parentTeamId: string | null;
                                mailingAddress?: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                } | null;
                                registeredAddress?: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                } | null;
                                supervisingBroker?: {
                                    userId: string;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string;
                                    };
                                    license: {
                                        /** Format: uuid */
                                        id: string;
                                        number: string;
                                        /** Format: date-time */
                                        expiration: string;
                                        /** @enum {string} */
                                        state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    };
                                } | null;
                                brokerageId?: string | null;
                                mlsId?: string | null;
                                mlsOfficeEmail?: string | null;
                                officeManager?: {
                                    userId: string;
                                    externalId: string | null;
                                    legacyExternalId: string | null;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string | null;
                                    };
                                    license: {
                                        /** Format: uuid */
                                        id: string;
                                        number: string;
                                        /** Format: date-time */
                                        expiration: string;
                                        /** @enum {string} */
                                        state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    };
                                } | null;
                                logoHorizontalUri?: string | null;
                                logoHorizontalUriAlt?: string | null;
                                isCompliant: boolean;
                                type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                                gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                                launchManager?: {
                                    userId: string;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string | null;
                                    };
                                } | null;
                                successManager?: {
                                    userId: string;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string | null;
                                    };
                                } | null;
                                nrdsId?: string | null;
                                createdBy?: string | null;
                                createdAt?: string | null;
                                updatedBy?: string | null;
                                updatedAt?: string | null;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        alias?: string;
                        /** Format: uuid */
                        brokerageId?: string;
                        /** Format: uuid */
                        brokerEmailId?: string;
                        /** Format: uuid */
                        brokerLicenseId?: string;
                        /** Format: uuid */
                        brokerPhoneId?: string;
                        /** Format: uuid */
                        brokerUserId?: string;
                        description?: string | null;
                        /** Format: email */
                        email: string;
                        externalId?: string;
                        legacyExternalId?: string | null;
                        legalName: string;
                        logoUri?: string | null;
                        logoUriAlt?: string | null;
                        mailingAddress?: {
                            street1: string;
                            street2?: string | null;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county?: string;
                            /** @enum {string} */
                            country?: "US";
                        } | null;
                        mailingAddressId?: string | null;
                        registeredAddress?: {
                            street1: string;
                            street2?: string | null;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county?: string;
                            /** @enum {string} */
                            country?: "US";
                        } | null;
                        registeredAddressId?: string | null;
                        parentTeamId?: string | null;
                        phoneNumber: string;
                        salesforceCustomerType?: ("Customer" | "Brokerage") | null;
                        websiteUrl?: string | null;
                        mlsId?: string | null;
                        mlsOfficeEmail?: string | null;
                        logoHorizontalUri?: string | null;
                        logoHorizontalUriAlt?: string | null;
                        type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                        gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                        launchManagerUserId?: string | null;
                        successManagerUserId?: string | null;
                        nrdsId?: string | null;
                        hidePlatformFeeReport?: boolean;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE";
                            legalName: string;
                            description?: string | null;
                            email?: string | null;
                            legacyExternalId: string | null;
                            phoneNumber?: string | null;
                            logoUri?: string | null;
                            logoUriAlt: string | null;
                            externalId: string;
                            websiteUrl: string | null;
                            alias: string | null;
                            parentTeamId: string | null;
                            mailingAddress?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            registeredAddress?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            supervisingBroker?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            brokerageId?: string | null;
                            mlsId?: string | null;
                            mlsOfficeEmail?: string | null;
                            officeManager?: {
                                userId: string;
                                externalId: string | null;
                                legacyExternalId: string | null;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            logoHorizontalUri?: string | null;
                            logoHorizontalUriAlt?: string | null;
                            isCompliant: boolean;
                            type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                            gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                            launchManager?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                            } | null;
                            successManager?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                            } | null;
                            nrdsId?: string | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                            childTeamIds: string[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE";
                            legalName: string;
                            description?: string | null;
                            email?: string | null;
                            legacyExternalId: string | null;
                            phoneNumber?: string | null;
                            logoUri?: string | null;
                            logoUriAlt: string | null;
                            externalId: string;
                            websiteUrl: string | null;
                            alias: string | null;
                            parentTeamId: string | null;
                            mailingAddress?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            registeredAddress?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            supervisingBroker?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            brokerageId?: string | null;
                            mlsId?: string | null;
                            mlsOfficeEmail?: string | null;
                            officeManager?: {
                                userId: string;
                                externalId: string | null;
                                legacyExternalId: string | null;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            logoHorizontalUri?: string | null;
                            logoHorizontalUriAlt?: string | null;
                            isCompliant: boolean;
                            type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                            gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                            launchManager?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                            } | null;
                            successManager?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                            } | null;
                            nrdsId?: string | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                            childTeamIds: string[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE";
                            legalName: string;
                            description?: string | null;
                            email?: string | null;
                            legacyExternalId: string | null;
                            phoneNumber?: string | null;
                            logoUri?: string | null;
                            logoUriAlt: string | null;
                            externalId: string;
                            websiteUrl: string | null;
                            alias: string | null;
                            parentTeamId: string | null;
                            mailingAddress?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            registeredAddress?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            supervisingBroker?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            brokerageId?: string | null;
                            mlsId?: string | null;
                            mlsOfficeEmail?: string | null;
                            officeManager?: {
                                userId: string;
                                externalId: string | null;
                                legacyExternalId: string | null;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            logoHorizontalUri?: string | null;
                            logoHorizontalUriAlt?: string | null;
                            isCompliant: boolean;
                            type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                            gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                            launchManager?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                            } | null;
                            successManager?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                            } | null;
                            nrdsId?: string | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                            childTeamIds: string[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        alias?: string;
                        /** Format: uuid */
                        brokerageId?: string;
                        /** Format: uuid */
                        brokerEmailId?: string;
                        /** Format: uuid */
                        brokerLicenseId?: string;
                        /** Format: uuid */
                        brokerPhoneId?: string;
                        /** Format: uuid */
                        brokerUserId?: string;
                        description?: string | null;
                        /** Format: email */
                        email?: string;
                        externalId?: string;
                        isOffboarding?: boolean;
                        legacyExternalId?: string | null;
                        legalName?: string;
                        logoUri?: string | null;
                        logoUriAlt?: string | null;
                        mailingAddress?: {
                            street1: string;
                            street2?: string | null;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county?: string;
                            /** @enum {string} */
                            country?: "US";
                        } | null;
                        mailingAddressId?: string | null;
                        registeredAddress?: {
                            street1: string;
                            street2?: string | null;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county?: string;
                            /** @enum {string} */
                            country?: "US";
                        } | null;
                        registeredAddressId?: string | null;
                        parentTeamId?: string | null;
                        phoneNumber?: string;
                        salesforceCustomerType?: ("Customer" | "Brokerage") | null;
                        websiteUrl?: string | null;
                        mlsId?: string | null;
                        mlsOfficeEmail?: string | null;
                        logoHorizontalUri?: string | null;
                        logoHorizontalUriAlt?: string | null;
                        officeManagerUserId?: string | null;
                        type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                        gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                        launchManagerUserId?: string | null;
                        successManagerUserId?: string | null;
                        nrdsId?: string | null;
                        hidePlatformFeeReport?: boolean;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE";
                            legalName: string;
                            description?: string | null;
                            email?: string | null;
                            legacyExternalId: string | null;
                            phoneNumber?: string | null;
                            logoUri?: string | null;
                            logoUriAlt: string | null;
                            externalId: string;
                            websiteUrl: string | null;
                            alias: string | null;
                            parentTeamId: string | null;
                            mailingAddress?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            registeredAddress?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            supervisingBroker?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            brokerageId?: string | null;
                            mlsId?: string | null;
                            mlsOfficeEmail?: string | null;
                            officeManager?: {
                                userId: string;
                                externalId: string | null;
                                legacyExternalId: string | null;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            logoHorizontalUri?: string | null;
                            logoHorizontalUriAlt?: string | null;
                            isCompliant: boolean;
                            type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                            gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                            launchManager?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                            } | null;
                            successManager?: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string | null;
                                };
                            } | null;
                            nrdsId?: string | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                            childTeamIds: string[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_DOES_NOT_MATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_UPDATED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/teams/locations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    experimentalAlias?: string;
                    search?: string;
                    ids?: string;
                    sort?: string;
                    after?: string;
                    before?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            paging: {
                                cursors: {
                                    after: string;
                                    before: string;
                                };
                                next: null | string;
                                previous: null | string;
                            };
                            data: {
                                /** Format: uuid */
                                id: string;
                                legalName: string;
                                alias: string | null;
                                logoUri?: string | null;
                                logoHorizontalUri?: string | null;
                                /** @enum {string} */
                                status: "ACTIVE" | "INACTIVE";
                                mailingAddress?: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                } | null;
                                isOffboarding: boolean;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    search?: string;
                };
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                userId: string;
                                externalId?: string | null;
                                legacyExternalId?: string | null;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl?: string | null;
                                address?: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                } | null;
                                contact: {
                                    email: string;
                                    phone?: string | null;
                                };
                                roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                                license?: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                } | null;
                                /** @enum {string} */
                                status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                                createdBy?: string | null;
                                createdAt?: string | null;
                                updatedBy?: string | null;
                                updatedAt?: string | null;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        userId: string;
                        externalId?: string | null;
                        legacyExternalId?: string;
                        licenseId?: string | null;
                        roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                        /** Format: uuid */
                        emailId?: string;
                        /** Format: email */
                        email?: string;
                        /** Format: uuid */
                        phoneId?: string;
                        phone?: string;
                        /** @enum {string} */
                        status?: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                        partnerLevelReporting?: boolean;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            userId: string;
                            externalId?: string | null;
                            legacyExternalId?: string | null;
                            firstName: string;
                            lastName: string;
                            displayName: string;
                            photoUrl?: string | null;
                            address?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            contact: {
                                email: string;
                                phone?: string | null;
                            };
                            roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                            license?: {
                                /** Format: uuid */
                                id: string;
                                number: string;
                                /** Format: date-time */
                                expiration: string;
                                /** @enum {string} */
                                state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            } | null;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_DOES_NOT_MATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_UPDATED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "LICENSE_ALREADY_EXISTS_ON_USER";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "LICENSE_STATE_USER_EXTERNALID_MISMATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/members/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            userId: string;
                            externalId?: string | null;
                            legacyExternalId?: string | null;
                            firstName: string;
                            lastName: string;
                            displayName: string;
                            photoUrl?: string | null;
                            address?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            contact: {
                                email: string;
                                phone?: string | null;
                            };
                            roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                            license?: {
                                /** Format: uuid */
                                id: string;
                                number: string;
                                /** Format: date-time */
                                expiration: string;
                                /** @enum {string} */
                                state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            } | null;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            userId: string;
                            externalId?: string | null;
                            legacyExternalId?: string | null;
                            firstName: string;
                            lastName: string;
                            displayName: string;
                            photoUrl?: string | null;
                            team: {
                                /** Format: uuid */
                                id: string;
                                /** @enum {string} */
                                status: "ACTIVE" | "INACTIVE";
                                legalName: string;
                                description?: string | null;
                                email?: string | null;
                                legacyExternalId: string | null;
                                phoneNumber?: string | null;
                                logoUri?: string | null;
                                logoUriAlt: string | null;
                                externalId: string;
                                websiteUrl: string | null;
                                alias: string | null;
                                parentTeamId: string | null;
                                mailingAddress?: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                } | null;
                                registeredAddress?: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                } | null;
                                supervisingBroker?: {
                                    userId: string;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string;
                                    };
                                    license: {
                                        /** Format: uuid */
                                        id: string;
                                        number: string;
                                        /** Format: date-time */
                                        expiration: string;
                                        /** @enum {string} */
                                        state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    };
                                } | null;
                                brokerageId?: string | null;
                                mlsId?: string | null;
                                mlsOfficeEmail?: string | null;
                                officeManager?: {
                                    userId: string;
                                    externalId: string | null;
                                    legacyExternalId: string | null;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string | null;
                                    };
                                    license: {
                                        /** Format: uuid */
                                        id: string;
                                        number: string;
                                        /** Format: date-time */
                                        expiration: string;
                                        /** @enum {string} */
                                        state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    };
                                } | null;
                                logoHorizontalUri?: string | null;
                                logoHorizontalUriAlt?: string | null;
                                isCompliant: boolean;
                                type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                                gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                                launchManager?: {
                                    userId: string;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string | null;
                                    };
                                } | null;
                                successManager?: {
                                    userId: string;
                                    firstName: string;
                                    lastName: string;
                                    displayName: string;
                                    photoUrl: string | null;
                                    contact: {
                                        email: string;
                                        phone: string | null;
                                    };
                                } | null;
                                nrdsId?: string | null;
                            };
                            contact: {
                                email: string;
                                phone?: string | null;
                            };
                            roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                            license?: {
                                /** Format: uuid */
                                id: string;
                                number: string;
                                /** Format: date-time */
                                expiration: string;
                                /** @enum {string} */
                                state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            } | null;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        externalId?: string | null;
                        legacyExternalId?: string;
                        licenseId?: string | null;
                        /** Format: uuid */
                        emailId?: string;
                        /** Format: email */
                        email?: string;
                        /** Format: uuid */
                        phoneId?: string;
                        phone?: string;
                        roles?: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                        /** @enum {string} */
                        status?: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                        partnerLevelReporting?: boolean;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            userId: string;
                            externalId?: string | null;
                            legacyExternalId?: string | null;
                            firstName: string;
                            lastName: string;
                            displayName: string;
                            photoUrl?: string | null;
                            address?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            contact: {
                                email: string;
                                phone?: string | null;
                            };
                            roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                            license?: {
                                /** Format: uuid */
                                id: string;
                                number: string;
                                /** Format: date-time */
                                expiration: string;
                                /** @enum {string} */
                                state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            } | null;
                            /** @enum {string} */
                            status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_DOES_NOT_MATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_UPDATED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "LICENSE_ALREADY_EXISTS_ON_USER";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "LICENSE_STATE_USER_EXTERNALID_MISMATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/teams/{teamId}/members/{userId}/legacy-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            partnerLevelReporting: boolean;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/members/{userId}/brokerage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Team Member Brokerage
         * @description Get the brokerage for a team member.
         *
         *     The brokerage returned is determined by the team member's role:
         *
         *     - If the team member does not have the role ReferralAgent, the endpoint returns the team's brokerage.
         *     - If the team member has the role ReferralAgent, the endpoint returns the LFRO (Limited Function Referral Office) type brokerage for the team's market.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            phoneNumber?: string | null;
                            address?: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            /** @enum {string} */
                            market: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** @enum {string} */
                            type: "STANDARD" | "LFRO";
                            license: {
                                /** Format: date-time */
                                expiration: string;
                                number: string;
                            };
                            managingBroker: {
                                userId: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl: string | null;
                                contact: {
                                    email: string;
                                    phone: string;
                                };
                                license: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                };
                            } | null;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/association-of-realtors/available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of available Association of Realtors for a team */
        get: {
            parameters: {
                query?: {
                    search?: string;
                    ids?: string;
                    sort?: string;
                    after?: string;
                    before?: string;
                    limit?: number;
                };
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                /** @enum {string} */
                                locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                /** Format: uuid */
                                multipleListingServiceId?: string;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: uuid */
                                createdBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                                /** Format: uuid */
                                updatedBy: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/multiple-listing-services/available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of available Multiple Listing Services for a team */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                provider: string;
                                providerId: string;
                                listingIdTip?: string | null;
                                associationOfRealtors?: string[];
                                createdBy: string;
                                /** Format: date-time */
                                createdAt: string;
                                updatedBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/mls-memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of MLS memberships for a team */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                primary: boolean;
                                registrationNumber: string;
                                multipleListingService: {
                                    /** Format: uuid */
                                    id: string;
                                    name: string;
                                    code: string;
                                    locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                    provider: string;
                                    providerId: string;
                                    listingIdTip?: string | null;
                                    associationOfRealtors?: string[];
                                };
                                /** Format: uuid */
                                teamId?: string;
                                /** Format: uuid */
                                userId?: string;
                                createdBy: string;
                                /** Format: date-time */
                                createdAt: string;
                                updatedBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/aor-memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the AOR membership records for a team */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                associationOfRealtors: {
                                    /** Format: uuid */
                                    id: string;
                                    name: string;
                                    code: string;
                                    /** @enum {string} */
                                    locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    /** Format: uuid */
                                    multipleListingServiceId?: string;
                                };
                                /** Format: uuid */
                                teamId?: string;
                                /** Format: uuid */
                                userId?: string;
                                primary: boolean;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: uuid */
                                createdBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                                /** Format: uuid */
                                updatedBy: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/legacy-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the legacy reporting flags for a team. */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            hidePlatformFeeReport: boolean;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    search?: string;
                    ids?: string;
                    sort?: string;
                    after?: string;
                    before?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            paging: {
                                cursors: {
                                    after: string;
                                    before: string;
                                };
                                next: null | string;
                                previous: null | string;
                            };
                            data: {
                                id: string;
                                status: ("ACTIVE" | "SUSPENDED" | "DRAFT") | null;
                                displayName: string;
                                legacyExternalId?: string | null;
                                externalId?: string | null;
                                firstName: string;
                                lastName: string;
                                photoUrl?: string | null;
                                nrdsId?: string | null;
                                address: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                } | null;
                                contacts: {
                                    id: string;
                                    primary: boolean;
                                    personal: boolean;
                                    value: string;
                                    /** @enum {string} */
                                    type: "EMAIL" | "PHONE";
                                }[];
                                logins: {
                                    id: string;
                                    email: string;
                                    provider: string;
                                    externalId?: string | null;
                                    userName: string;
                                }[];
                                roles: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                                createdBy?: string | null;
                                createdAt?: string | null;
                                updatedBy?: string | null;
                                updatedAt?: string | null;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            status: ("ACTIVE" | "SUSPENDED" | "DRAFT") | null;
                            displayName: string;
                            legacyExternalId?: string | null;
                            externalId?: string | null;
                            firstName: string;
                            lastName: string;
                            photoUrl?: string | null;
                            nrdsId?: string | null;
                            address: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            contacts: {
                                id: string;
                                primary: boolean;
                                personal: boolean;
                                value: string;
                                /** @enum {string} */
                                type: "EMAIL" | "PHONE";
                            }[];
                            logins: {
                                id: string;
                                email: string;
                                provider: string;
                                externalId?: string | null;
                                userName: string;
                            }[];
                            roles: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        externalId?: string | null;
                        legacyExternalId?: string | null;
                        addressId?: string | null;
                        address?: {
                            street1: string;
                            street2?: string | null;
                            city: string;
                            /** @enum {string} */
                            state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                            postalCode: string;
                            county?: string;
                            /** @enum {string} */
                            country?: "US";
                        } | null;
                        displayName?: string;
                        photoUrl?: string | null;
                        nrdsId?: string | null;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            status: ("ACTIVE" | "SUSPENDED" | "DRAFT") | null;
                            displayName: string;
                            legacyExternalId?: string | null;
                            externalId?: string | null;
                            firstName: string;
                            lastName: string;
                            photoUrl?: string | null;
                            nrdsId?: string | null;
                            address: {
                                id: string;
                                street1: string;
                                street2: string;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county: string;
                                /** @enum {string} */
                                country: "US";
                                geoLocationLatitude: string;
                                geoLocationLongitude: string;
                            } | null;
                            contacts: {
                                id: string;
                                primary: boolean;
                                personal: boolean;
                                value: string;
                                /** @enum {string} */
                                type: "EMAIL" | "PHONE";
                            }[];
                            logins: {
                                id: string;
                                email: string;
                                provider: string;
                                externalId?: string | null;
                                userName: string;
                            }[];
                            roles: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/users/{userId}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            feedbackProgram: {
                                responded: string | null;
                                influencer: boolean;
                                visualLearner: boolean;
                                earlyAdopter: boolean;
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        feedbackProgram?: {
                            influencer?: boolean;
                            visualLearner?: boolean;
                            earlyAdopter?: boolean;
                        };
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            feedbackProgram: {
                                responded: string | null;
                                influencer: boolean;
                                visualLearner: boolean;
                                earlyAdopter: boolean;
                            };
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/users/{userId}/licenses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                id: string;
                                externalId?: string | null;
                                /** @enum {string} */
                                state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                number: string;
                                /** Format: date-time */
                                expiration: string;
                                createdBy?: string | null;
                                createdAt?: string | null;
                                updatedBy?: string | null;
                                updatedAt?: string | null;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        };
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        externalId?: string | null;
                        type?: string | null;
                        status?: string | null;
                        number: string;
                        /** Format: date-time */
                        expiration: string;
                        /** @enum {string} */
                        state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            externalId?: string | null;
                            /** @enum {string} */
                            state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            number: string;
                            /** Format: date-time */
                            expiration: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "LICENSE_ALREADY_EXISTS_ON_USER";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "LICENSE_STATE_USER_EXTERNALID_MISMATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/licenses/{licenseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    licenseId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            externalId?: string | null;
                            /** @enum {string} */
                            state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            number: string;
                            /** Format: date-time */
                            expiration: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    licenseId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            externalId?: string | null;
                            /** @enum {string} */
                            state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            number: string;
                            /** Format: date-time */
                            expiration: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_DELETED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    licenseId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        externalId?: string;
                        /** @enum {string} */
                        state?: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                        number?: string;
                        /** Format: date-time */
                        expiration?: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            externalId?: string | null;
                            /** @enum {string} */
                            state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            number: string;
                            /** Format: date-time */
                            expiration: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_DOES_NOT_MATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_UPDATED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "LICENSE_ALREADY_EXISTS_ON_USER";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "LICENSE_STATE_USER_EXTERNALID_MISMATCH";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/users/{userId}/licenses/{licenseId}/associations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    licenseId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** @enum {string} */
                                rel: "teams" | "brokerages" | "members";
                                /** Format: uri-template */
                                href: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        roles: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                        };
                    };
                };
            };
        };
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        roles: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                        };
                    };
                };
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/roles/{role}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    role: "ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR";
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: ("ADMIN" | "AUDITOR" | "BROKER" | "PAYMENT_SPECIALIST" | "TRANSACTION_COORDINATOR")[];
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/team-members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    search?: string;
                };
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                teamId: string;
                                externalId?: string | null;
                                legacyExternalId?: string | null;
                                team: {
                                    /** Format: uuid */
                                    id: string;
                                    /** @enum {string} */
                                    status: "ACTIVE" | "INACTIVE";
                                    legalName: string;
                                    description?: string | null;
                                    email?: string | null;
                                    legacyExternalId: string | null;
                                    phoneNumber?: string | null;
                                    logoUri?: string | null;
                                    logoUriAlt: string | null;
                                    externalId: string;
                                    websiteUrl: string | null;
                                    alias: string | null;
                                    parentTeamId: string | null;
                                    mailingAddress?: {
                                        id: string;
                                        street1: string;
                                        street2: string;
                                        city: string;
                                        /** @enum {string} */
                                        state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                        postalCode: string;
                                        county: string;
                                        /** @enum {string} */
                                        country: "US";
                                        geoLocationLatitude: string;
                                        geoLocationLongitude: string;
                                    } | null;
                                    registeredAddress?: {
                                        id: string;
                                        street1: string;
                                        street2: string;
                                        city: string;
                                        /** @enum {string} */
                                        state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                        postalCode: string;
                                        county: string;
                                        /** @enum {string} */
                                        country: "US";
                                        geoLocationLatitude: string;
                                        geoLocationLongitude: string;
                                    } | null;
                                    supervisingBroker?: {
                                        userId: string;
                                        firstName: string;
                                        lastName: string;
                                        displayName: string;
                                        photoUrl: string | null;
                                        contact: {
                                            email: string;
                                            phone: string;
                                        };
                                        license: {
                                            /** Format: uuid */
                                            id: string;
                                            number: string;
                                            /** Format: date-time */
                                            expiration: string;
                                            /** @enum {string} */
                                            state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                        };
                                    } | null;
                                    brokerageId?: string | null;
                                    mlsId?: string | null;
                                    mlsOfficeEmail?: string | null;
                                    officeManager?: {
                                        userId: string;
                                        externalId: string | null;
                                        legacyExternalId: string | null;
                                        firstName: string;
                                        lastName: string;
                                        displayName: string;
                                        photoUrl: string | null;
                                        contact: {
                                            email: string;
                                            phone: string | null;
                                        };
                                        license: {
                                            /** Format: uuid */
                                            id: string;
                                            number: string;
                                            /** Format: date-time */
                                            expiration: string;
                                            /** @enum {string} */
                                            state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                        };
                                    } | null;
                                    logoHorizontalUri?: string | null;
                                    logoHorizontalUriAlt?: string | null;
                                    isCompliant: boolean;
                                    type?: ("TRADITIONAL" | "EXPANSION_MARKET" | "EXTENDED_OFFERING_STANDALONE" | "EXTENDED_OFFERING_CO_BRAND") | null;
                                    gtmSegment?: ("CORE" | "EMERGING" | "STRATEGIC" | "LIMITED_OFFERING" | "ON_DEMAND") | null;
                                    launchManager?: {
                                        userId: string;
                                        firstName: string;
                                        lastName: string;
                                        displayName: string;
                                        photoUrl: string | null;
                                        contact: {
                                            email: string;
                                            phone: string | null;
                                        };
                                    } | null;
                                    successManager?: {
                                        userId: string;
                                        firstName: string;
                                        lastName: string;
                                        displayName: string;
                                        photoUrl: string | null;
                                        contact: {
                                            email: string;
                                            phone: string | null;
                                        };
                                    } | null;
                                    nrdsId?: string | null;
                                };
                                contact: {
                                    email: string;
                                    phone?: string | null;
                                };
                                roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                                license?: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                } | null;
                                /** @enum {string} */
                                status: "ACTIVE" | "INACTIVE" | "ONBOARDING" | "OFFBOARDING" | "DRAFT";
                                createdBy?: string | null;
                                createdAt?: string | null;
                                updatedBy?: string | null;
                                updatedAt?: string | null;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /** @enum {boolean} */
                        primary?: true;
                        personal?: boolean;
                        /** @enum {string} */
                        type: "EMAIL" | "PHONE";
                        value: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            userId: string;
                            primary: boolean;
                            personal: boolean;
                            /** @enum {string} */
                            type: "EMAIL" | "PHONE";
                            value: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            userId: string;
                            primary: boolean;
                            personal: boolean;
                            /** @enum {string} */
                            type: "EMAIL" | "PHONE";
                            value: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/contacts/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    contactId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            userId: string;
                            primary: boolean;
                            personal: boolean;
                            /** @enum {string} */
                            type: "EMAIL" | "PHONE";
                            value: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_DELETED";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    contactId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        primary?: boolean;
                        personal?: boolean;
                        value?: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            userId: string;
                            primary: boolean;
                            personal: boolean;
                            /** @enum {string} */
                            type: "EMAIL" | "PHONE";
                            value: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_ASSOCIATED";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_UPDATED";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/users/{userId}/contacts/{contactId}/associations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    contactId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** @enum {string} */
                                rel: "teams" | "brokerages" | "members";
                                /** Format: uri-template */
                                href: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/signature": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            file: string | null;
                        };
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        file: string | null;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/interaction-permissions/{type}/team-members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    search?: string;
                    after?: string;
                    before?: string;
                    limit?: number;
                };
                header?: never;
                path: {
                    userId: string;
                    type: "submit-as" | "sharing";
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            paging: {
                                cursors: {
                                    after: string;
                                    before: string;
                                };
                                next: null | string;
                                previous: null | string;
                            };
                            data: {
                                /** Format: uuid */
                                userId: string;
                                externalId?: string | null;
                                legacyExternalId?: string | null;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                photoUrl?: string | null;
                                contact: {
                                    email: string;
                                    phone?: string | null;
                                };
                                roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                                license?: {
                                    /** Format: uuid */
                                    id: string;
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                } | null;
                                createdBy?: string | null;
                                createdAt?: string | null;
                                updatedBy?: string | null;
                                updatedAt?: string | null;
                                /** Format: uuid */
                                teamId: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/avatar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        x?: number;
                        y?: number;
                        image: string | null;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            thumbnail: string | null;
                            headshot: string | null;
                        };
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/association-of-realtors/available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get available Association of Realtors for a user based on their team memberships */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                /** @enum {string} */
                                locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                /** Format: uuid */
                                multipleListingServiceId?: string;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: uuid */
                                createdBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                                /** Format: uuid */
                                updatedBy: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/aor-memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get Association of Realtors memberships for a user */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                associationOfRealtors: {
                                    /** Format: uuid */
                                    id: string;
                                    name: string;
                                    code: string;
                                    /** @enum {string} */
                                    locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    /** Format: uuid */
                                    multipleListingServiceId?: string;
                                };
                                /** Format: uuid */
                                teamId?: string;
                                /** Format: uuid */
                                userId?: string;
                                primary: boolean;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: uuid */
                                createdBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                                /** Format: uuid */
                                updatedBy: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/multiple-listing-services/available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get available Multiple Listing Services for a user based on their team memberships */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                provider: string;
                                providerId: string;
                                listingIdTip?: string | null;
                                associationOfRealtors?: string[];
                                createdBy: string;
                                /** Format: date-time */
                                createdAt: string;
                                updatedBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/mls-memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                primary: boolean;
                                registrationNumber: string;
                                multipleListingService: {
                                    /** Format: uuid */
                                    id: string;
                                    name: string;
                                    code: string;
                                    locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                    provider: string;
                                    providerId: string;
                                    listingIdTip?: string | null;
                                    associationOfRealtors?: string[];
                                };
                                /** Format: uuid */
                                teamId?: string;
                                /** Format: uuid */
                                userId?: string;
                                createdBy: string;
                                /** Format: date-time */
                                createdAt: string;
                                updatedBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/interaction-permissions/granted": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            firstName: string;
                            lastName: string;
                            displayName: string;
                            photoUrl?: string | null;
                            status: ("ACTIVE" | "SUSPENDED" | "DRAFT") | null;
                            contacts: {
                                id: string;
                                primary: boolean;
                                personal: boolean;
                                value: string;
                                /** @enum {string} */
                                type: "EMAIL" | "PHONE";
                            }[];
                            sharing: boolean;
                            submit: boolean;
                        }[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/interaction-permissions/received": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            firstName: string;
                            lastName: string;
                            displayName: string;
                            photoUrl?: string | null;
                            status: ("ACTIVE" | "SUSPENDED" | "DRAFT") | null;
                            contacts: {
                                id: string;
                                primary: boolean;
                                personal: boolean;
                                value: string;
                                /** @enum {string} */
                                type: "EMAIL" | "PHONE";
                            }[];
                            sharing: boolean;
                            submit: boolean;
                        }[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/logins/{loginId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                    loginId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        userName?: string;
                        email?: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            email: string;
                            provider: string;
                            externalId?: string | null;
                            userName: string;
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_UPDATED";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/multiple-listing-services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a list of Multiple Listing Services */
        get: {
            parameters: {
                query?: {
                    search?: string;
                    sort?: string;
                    after?: string;
                    before?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            paging: {
                                cursors: {
                                    after: string;
                                    before: string;
                                };
                                next: null | string;
                                previous: null | string;
                            };
                            data: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                provider: string;
                                providerId: string;
                                listingIdTip?: string | null;
                                associationOfRealtors?: string[];
                                createdBy: string;
                                /** Format: date-time */
                                createdAt: string;
                                updatedBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        put?: never;
        /** @description Adds a Multiple Listing Service to identity */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        name: string;
                        code: string;
                        provider: string;
                        providerId: string;
                        listingIdTip?: string | null;
                        locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            code: string;
                            locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                            provider: string;
                            providerId: string;
                            listingIdTip?: string | null;
                            associationOfRealtors?: string[];
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            updatedBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_DELETED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/multiple-listing-services/{mlsId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a Multiple Listing Service by ID */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    mlsId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            code: string;
                            locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                            provider: string;
                            providerId: string;
                            listingIdTip?: string | null;
                            associationOfRealtors?: string[];
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            updatedBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** @description Soft delete a Multiple Listing Service */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    mlsId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            code: string;
                            locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                            provider: string;
                            providerId: string;
                            listingIdTip?: string | null;
                            associationOfRealtors?: string[];
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            updatedBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_DELETED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /** @description Updates a Multiple Listing Service */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    mlsId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                        code?: string;
                        locales?: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                        provider?: string;
                        providerId?: string;
                        listingIdTip?: string | null;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            code: string;
                            locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                            provider: string;
                            providerId: string;
                            listingIdTip?: string | null;
                            associationOfRealtors?: string[];
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            updatedBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_DELETED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/multiple-listing-services/{mlsId}/memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description List all memberships for a Multiple Listing Service */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    mlsId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                primary: boolean;
                                registrationNumber: string;
                                multipleListingService: {
                                    /** Format: uuid */
                                    id: string;
                                    name: string;
                                    code: string;
                                    locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                    provider: string;
                                    providerId: string;
                                    listingIdTip?: string | null;
                                    associationOfRealtors?: string[];
                                };
                                /** Format: uuid */
                                teamId?: string;
                                /** Format: uuid */
                                userId?: string;
                                createdBy: string;
                                /** Format: date-time */
                                createdAt: string;
                                updatedBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        put?: never;
        /** @description Creates a membership for a Multiple Listing Service */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    mlsId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /** Format: uuid */
                        teamId?: string;
                        /** Format: uuid */
                        userId?: string;
                        primary?: boolean;
                        registrationNumber: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            primary: boolean;
                            registrationNumber: string;
                            multipleListingService: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                provider: string;
                                providerId: string;
                                listingIdTip?: string | null;
                                associationOfRealtors?: string[];
                            };
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: uuid */
                            userId?: string;
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            updatedBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_DELETED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/multiple-listing-services/{mlsId}/memberships/{membershipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a membership for a Multiple Listing Service */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    mlsId: string;
                    membershipId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            primary: boolean;
                            registrationNumber: string;
                            multipleListingService: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                provider: string;
                                providerId: string;
                                listingIdTip?: string | null;
                                associationOfRealtors?: string[];
                            };
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: uuid */
                            userId?: string;
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            updatedBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** @description Soft deletes a Multiple Listing Service membership */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    mlsId: string;
                    membershipId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            primary: boolean;
                            registrationNumber: string;
                            multipleListingService: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                provider: string;
                                providerId: string;
                                listingIdTip?: string | null;
                                associationOfRealtors?: string[];
                            };
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: uuid */
                            userId?: string;
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            updatedBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /** @description Updates primary flag or registrationNumber of an MLS membership */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    mlsId: string;
                    membershipId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        primary?: boolean;
                        registrationNumber?: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            primary: boolean;
                            registrationNumber: string;
                            multipleListingService: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                provider: string;
                                providerId: string;
                                listingIdTip?: string | null;
                                associationOfRealtors?: string[];
                            };
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: uuid */
                            userId?: string;
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            updatedBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_CANNOT_BE_DELETED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/association-of-realtors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets a list of Association of Realtors */
        get: {
            parameters: {
                query?: {
                    search?: string;
                    ids?: string;
                    sort?: string;
                    after?: string;
                    before?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            paging: {
                                cursors: {
                                    after: string;
                                    before: string;
                                };
                                next: null | string;
                                previous: null | string;
                            };
                            data: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                /** @enum {string} */
                                locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                /** Format: uuid */
                                multipleListingServiceId?: string;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: uuid */
                                createdBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                                /** Format: uuid */
                                updatedBy: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        /** @description Adds an Association of Realtors to Identity */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        name: string;
                        code: string;
                        /** @enum {string} */
                        locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                        /** Format: uuid */
                        multipleListingServiceId?: string;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            code: string;
                            /** @enum {string} */
                            locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** Format: uuid */
                            multipleListingServiceId?: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                            /** Format: uuid */
                            updatedBy: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/association-of-realtors/{aorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the details of an Association of Realtors */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    aorId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            code: string;
                            /** @enum {string} */
                            locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** Format: uuid */
                            multipleListingServiceId?: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                            /** Format: uuid */
                            updatedBy: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    aorId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            code: string;
                            /** @enum {string} */
                            locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** Format: uuid */
                            multipleListingServiceId?: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                            /** Format: uuid */
                            updatedBy: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /** @description Updates an Association of Realtors */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    aorId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                        code?: string;
                        /** @enum {string} */
                        locale?: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                        multipleListingServiceId?: string | null;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            name: string;
                            code: string;
                            /** @enum {string} */
                            locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                            /** Format: uuid */
                            multipleListingServiceId?: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                            /** Format: uuid */
                            updatedBy: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/association-of-realtors/{aorId}/memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets all memberships for an Association of Realtors */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    aorId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                /** Format: uuid */
                                id: string;
                                associationOfRealtors: {
                                    /** Format: uuid */
                                    id: string;
                                    name: string;
                                    code: string;
                                    /** @enum {string} */
                                    locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    /** Format: uuid */
                                    multipleListingServiceId?: string;
                                };
                                /** Format: uuid */
                                teamId?: string;
                                /** Format: uuid */
                                userId?: string;
                                primary: boolean;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: uuid */
                                createdBy: string;
                                /** Format: date-time */
                                updatedAt: string;
                                /** Format: uuid */
                                updatedBy: string;
                            }[];
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        /** @description Creates a membership between an Association of Realtors and a team or user */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    aorId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** Format: uuid */
                        teamId?: string;
                        /** Format: uuid */
                        userId?: string;
                        primary?: boolean;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            associationOfRealtors: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                /** @enum {string} */
                                locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                /** Format: uuid */
                                multipleListingServiceId?: string;
                            };
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: uuid */
                            userId?: string;
                            primary: boolean;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                            /** Format: uuid */
                            updatedBy: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MULTIPLE_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/association-of-realtors/{aorId}/memberships/{membershipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the details of an Association of Realtors Membership */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    aorId: string;
                    membershipId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            associationOfRealtors: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                /** @enum {string} */
                                locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                /** Format: uuid */
                                multipleListingServiceId?: string;
                            };
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: uuid */
                            userId?: string;
                            primary: boolean;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                            /** Format: uuid */
                            updatedBy: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** @description Soft deletes an Association of Realtors membership */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    aorId: string;
                    membershipId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            associationOfRealtors: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                /** @enum {string} */
                                locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                /** Format: uuid */
                                multipleListingServiceId?: string;
                            };
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: uuid */
                            userId?: string;
                            primary: boolean;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                            /** Format: uuid */
                            updatedBy: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /** @description Updates primary flag of an AOR membership */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    aorId: string;
                    membershipId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        primary: boolean;
                    };
                };
            };
            responses: {
                /** @description Default Response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** Format: uuid */
                            id: string;
                            associationOfRealtors: {
                                /** Format: uuid */
                                id: string;
                                name: string;
                                code: string;
                                /** @enum {string} */
                                locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                /** Format: uuid */
                                multipleListingServiceId?: string;
                            };
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: uuid */
                            userId?: string;
                            primary: boolean;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            updatedAt: string;
                            /** Format: uuid */
                            updatedBy: string;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_ALREADY_EXISTS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/prospects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Adds a Prospect to Identity */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        user: {
                            /** Format: uuid */
                            id?: string;
                            firstName: string;
                            lastName: string;
                            displayName: string;
                            /** @enum {string} */
                            status: "DRAFT" | "PROSPECT";
                            address: {
                                street1: string;
                                street2?: string | null;
                                city: string;
                                /** @enum {string} */
                                state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                postalCode: string;
                                county?: string;
                                /** @enum {string} */
                                country?: "US";
                            };
                            contacts: {
                                /** @enum {boolean} */
                                primary?: true;
                                personal?: boolean;
                                /** @enum {string} */
                                type: "EMAIL" | "PHONE";
                                value: string;
                            }[];
                            mlsMemberships: {
                                /** Format: uuid */
                                mlsId: string;
                                registrationNumber: string;
                            }[];
                            aorMemberships: string[];
                        };
                        teamMembers: {
                            /** Format: uuid */
                            teamId: string;
                            roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                            tcAssignments?: string[];
                            submitAs?: string[];
                            transactAs?: string[];
                            license?: {
                                /** @enum {string} */
                                state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                number: string;
                                /** Format: date-time */
                                expiration: string;
                            };
                        }[];
                        emailSubscriptions?: string;
                        comments?: string;
                        /** Format: uuid */
                        followUpContact?: string;
                        leadSignatureRequired?: boolean;
                        provisioningTools?: ("ACTIVE_PIPE" | "FOLLOW_UP_BOSS" | "MARQ" | "MOXI_PRESENT")[];
                        /** Format: uuid */
                        pricingPlanAgentId?: string;
                        pricingPlanDetails?: {
                            /** @enum {string} */
                            tierType: "TIERED" | "NON_TIERED" | "REFERRALS";
                            tieredDetails?: {
                                /** @enum {string} */
                                calculationMethod: "GROSS_COMMISSION" | "HOME_SALES_PRICE" | "TRANSACTION_COUNT";
                                /** @enum {string} */
                                resetPeriod: "OTHER" | "LICENSE_TRANSFER_DATE" | "ANNUAL_JAN_1" | "NO_RESET_DATE";
                                /** Format: date */
                                resetDate?: string;
                                tierPlans?: {
                                    startingAt: number;
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                }[];
                            };
                            nonTieredDetails?: {
                                agentPercent: number;
                                brandPercent: number;
                                subTeamPercent?: number;
                            };
                            referralsDetails?: {
                                agentPercent: number;
                                brandPercent: number;
                                subTeamPercent?: number;
                            };
                            additionalSplit?: {
                                /** @enum {string} */
                                leadSource: "AGENT_GENERATED" | "BTSA" | "DOOR_KNOCKING" | "MARKETING_CHANNEL" | "OFFER_WRITING" | "ONLINE" | "OPEN_HOUSE" | "PAID" | "PERFORMANCE" | "PROVIDED_BY_TEAM_LEAD_TO_ASSOCIATE_AGENT" | "PROVIDED_BY_TEAM_OR_PARTNER_TO_ASSOCIATE_AGENT" | "SHOWING_LEAD" | "TEAM_PROVIDED" | "TEAM_PROVIDED_COLD" | "TEAM_PROVIDED_WARM" | "TEAM_REFERRAL" | "ZILLOW";
                                agentPercent: number;
                                brandPercent: number;
                                subTeamPercent?: number;
                            }[];
                            transactionSplit?: {
                                referrals: {
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                };
                                leases: {
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                };
                                newConstruction: {
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                };
                            };
                            agentFees?: {
                                /** @enum {string} */
                                type: "ADMIN_FEE" | "LISTING_MANAGEMENT_FEE" | "MARKETING_FEE" | "TRANSACTION_COORDINATOR_FEE" | "TEAM_FEE" | "AGENT_TO_AGENT_SAME_TEAM";
                                amount: number;
                            }[];
                        };
                    };
                };
            };
            responses: {
                /** @description Default Response */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            user: {
                                id: string;
                                status: ("ACTIVE" | "SUSPENDED" | "DRAFT") | null;
                                displayName: string;
                                legacyExternalId?: string | null;
                                externalId?: string | null;
                                firstName: string;
                                lastName: string;
                                photoUrl?: string | null;
                                nrdsId?: string | null;
                                logins: {
                                    id: string;
                                    email: string;
                                    provider: string;
                                    externalId?: string | null;
                                    userName: string;
                                }[];
                                contacts: {
                                    id: string;
                                    primary: boolean;
                                    personal: boolean;
                                    value: string;
                                    /** @enum {string} */
                                    type: "EMAIL" | "PHONE";
                                }[];
                                mlsMemberships: {
                                    /** Format: uuid */
                                    id: string;
                                    primary: boolean;
                                    registrationNumber: string;
                                    multipleListingService: {
                                        /** Format: uuid */
                                        id: string;
                                        name: string;
                                        code: string;
                                        locales: ("AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA")[];
                                        provider: string;
                                        providerId: string;
                                        listingIdTip?: string | null;
                                        associationOfRealtors?: string[];
                                    };
                                    /** Format: uuid */
                                    teamId?: string;
                                    /** Format: uuid */
                                    userId?: string;
                                    createdBy: string;
                                    /** Format: date-time */
                                    createdAt: string;
                                    updatedBy: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                }[];
                                aorMemberships: {
                                    /** Format: uuid */
                                    id: string;
                                    associationOfRealtors: {
                                        /** Format: uuid */
                                        id: string;
                                        name: string;
                                        code: string;
                                        /** @enum {string} */
                                        locale: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                        /** Format: uuid */
                                        multipleListingServiceId?: string;
                                    };
                                    /** Format: uuid */
                                    teamId?: string;
                                    /** Format: uuid */
                                    userId?: string;
                                    primary: boolean;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: uuid */
                                    createdBy: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    /** Format: uuid */
                                    updatedBy: string;
                                }[];
                                address: {
                                    id: string;
                                    street1: string;
                                    street2: string;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county: string;
                                    /** @enum {string} */
                                    country: "US";
                                    geoLocationLatitude: string;
                                    geoLocationLongitude: string;
                                };
                            };
                            teamMembers: {
                                /** Format: uuid */
                                teamId: string;
                                roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                                tcAssignments?: string[];
                                submitAs?: string[];
                                transactAs?: string[];
                                license?: {
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                };
                            }[];
                            emailSubscriptions?: string;
                            comments?: string;
                            /** Format: uuid */
                            followUpContact?: string;
                            leadSignatureRequired?: boolean;
                            /** Format: uuid */
                            pricingPlanAgentId?: string;
                            pricingPlanDetails?: {
                                /** @enum {string} */
                                tierType: "TIERED" | "NON_TIERED" | "REFERRALS";
                                tieredDetails?: {
                                    /** @enum {string} */
                                    calculationMethod: "GROSS_COMMISSION" | "HOME_SALES_PRICE" | "TRANSACTION_COUNT";
                                    /** @enum {string} */
                                    resetPeriod: "OTHER" | "LICENSE_TRANSFER_DATE" | "ANNUAL_JAN_1" | "NO_RESET_DATE";
                                    /** Format: date */
                                    resetDate?: string;
                                    tierPlans?: {
                                        startingAt: number;
                                        agentPercent: number;
                                        brandPercent: number;
                                        subTeamPercent?: number;
                                    }[];
                                };
                                nonTieredDetails?: {
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                };
                                referralsDetails?: {
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                };
                                additionalSplit?: {
                                    /** @enum {string} */
                                    leadSource: "AGENT_GENERATED" | "BTSA" | "DOOR_KNOCKING" | "MARKETING_CHANNEL" | "OFFER_WRITING" | "ONLINE" | "OPEN_HOUSE" | "PAID" | "PERFORMANCE" | "PROVIDED_BY_TEAM_LEAD_TO_ASSOCIATE_AGENT" | "PROVIDED_BY_TEAM_OR_PARTNER_TO_ASSOCIATE_AGENT" | "SHOWING_LEAD" | "TEAM_PROVIDED" | "TEAM_PROVIDED_COLD" | "TEAM_PROVIDED_WARM" | "TEAM_REFERRAL" | "ZILLOW";
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                }[];
                                transactionSplit?: {
                                    referrals: {
                                        agentPercent: number;
                                        brandPercent: number;
                                        subTeamPercent?: number;
                                    };
                                    leases: {
                                        agentPercent: number;
                                        brandPercent: number;
                                        subTeamPercent?: number;
                                    };
                                    newConstruction: {
                                        agentPercent: number;
                                        brandPercent: number;
                                        subTeamPercent?: number;
                                    };
                                };
                                agentFees?: {
                                    /** @enum {string} */
                                    type: "ADMIN_FEE" | "LISTING_MANAGEMENT_FEE" | "MARKETING_FEE" | "TRANSACTION_COORDINATOR_FEE" | "TEAM_FEE" | "AGENT_TO_AGENT_SAME_TEAM";
                                    amount: number;
                                }[];
                            };
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        } | {
                            user: {
                                /** Format: uuid */
                                id?: string;
                                firstName: string;
                                lastName: string;
                                displayName: string;
                                /** @enum {string} */
                                status: "DRAFT" | "PROSPECT";
                                address: {
                                    street1: string;
                                    street2?: string | null;
                                    city: string;
                                    /** @enum {string} */
                                    state: "AL" | "AK" | "AS" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FM" | "FL" | "GA" | "GU" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MH" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "MP" | "OH" | "OK" | "OR" | "PW" | "PA" | "PR" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VI" | "VA" | "WA" | "WV" | "WI" | "WY";
                                    postalCode: string;
                                    county?: string;
                                    /** @enum {string} */
                                    country?: "US";
                                };
                                contacts: {
                                    /** @enum {boolean} */
                                    primary?: true;
                                    personal?: boolean;
                                    /** @enum {string} */
                                    type: "EMAIL" | "PHONE";
                                    value: string;
                                }[];
                                mlsMemberships: {
                                    /** Format: uuid */
                                    mlsId: string;
                                    registrationNumber: string;
                                }[];
                                aorMemberships: string[];
                            };
                            teamMembers: {
                                /** Format: uuid */
                                teamId: string;
                                roles: ("AGENT" | "TRANSACTION_COORDINATOR" | "LEAD" | "MEMBER" | "REFERRAL_AGENT")[];
                                tcAssignments?: string[];
                                submitAs?: string[];
                                transactAs?: string[];
                                license?: {
                                    /** @enum {string} */
                                    state: "AZ" | "CA" | "CO" | "DC" | "FL" | "GA" | "KY" | "MD" | "MA" | "NJ" | "NY" | "NC" | "OH" | "OR" | "SC" | "TX" | "VA" | "WA";
                                    number: string;
                                    /** Format: date-time */
                                    expiration: string;
                                };
                            }[];
                            emailSubscriptions?: string;
                            comments?: string;
                            /** Format: uuid */
                            followUpContact?: string;
                            leadSignatureRequired?: boolean;
                            provisioningTools?: ("ACTIVE_PIPE" | "FOLLOW_UP_BOSS" | "MARQ" | "MOXI_PRESENT")[];
                            /** Format: uuid */
                            pricingPlanAgentId?: string;
                            pricingPlanDetails?: {
                                /** @enum {string} */
                                tierType: "TIERED" | "NON_TIERED" | "REFERRALS";
                                tieredDetails?: {
                                    /** @enum {string} */
                                    calculationMethod: "GROSS_COMMISSION" | "HOME_SALES_PRICE" | "TRANSACTION_COUNT";
                                    /** @enum {string} */
                                    resetPeriod: "OTHER" | "LICENSE_TRANSFER_DATE" | "ANNUAL_JAN_1" | "NO_RESET_DATE";
                                    /** Format: date */
                                    resetDate?: string;
                                    tierPlans?: {
                                        startingAt: number;
                                        agentPercent: number;
                                        brandPercent: number;
                                        subTeamPercent?: number;
                                    }[];
                                };
                                nonTieredDetails?: {
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                };
                                referralsDetails?: {
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                };
                                additionalSplit?: {
                                    /** @enum {string} */
                                    leadSource: "AGENT_GENERATED" | "BTSA" | "DOOR_KNOCKING" | "MARKETING_CHANNEL" | "OFFER_WRITING" | "ONLINE" | "OPEN_HOUSE" | "PAID" | "PERFORMANCE" | "PROVIDED_BY_TEAM_LEAD_TO_ASSOCIATE_AGENT" | "PROVIDED_BY_TEAM_OR_PARTNER_TO_ASSOCIATE_AGENT" | "SHOWING_LEAD" | "TEAM_PROVIDED" | "TEAM_PROVIDED_COLD" | "TEAM_PROVIDED_WARM" | "TEAM_REFERRAL" | "ZILLOW";
                                    agentPercent: number;
                                    brandPercent: number;
                                    subTeamPercent?: number;
                                }[];
                                transactionSplit?: {
                                    referrals: {
                                        agentPercent: number;
                                        brandPercent: number;
                                        subTeamPercent?: number;
                                    };
                                    leases: {
                                        agentPercent: number;
                                        brandPercent: number;
                                        subTeamPercent?: number;
                                    };
                                    newConstruction: {
                                        agentPercent: number;
                                        brandPercent: number;
                                        subTeamPercent?: number;
                                    };
                                };
                                agentFees?: {
                                    /** @enum {string} */
                                    type: "ADMIN_FEE" | "LISTING_MANAGEMENT_FEE" | "MARKETING_FEE" | "TRANSACTION_COORDINATOR_FEE" | "TEAM_FEE" | "AGENT_TO_AGENT_SAME_TEAM";
                                    amount: number;
                                }[];
                            };
                            createdBy?: string | null;
                            createdAt?: string | null;
                            updatedBy?: string | null;
                            updatedAt?: string | null;
                        };
                    };
                };
                /** @description Default Response */
                "4XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "BAD_REQUEST";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "FORBIDDEN";
                            /** @enum {number} */
                            statusCode: 403;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "MINIMUM_REQUIRED_FIELDS";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "ROUTE_NOT_FOUND";
                            /** @enum {number} */
                            statusCode: 404;
                        } | {
                            error: string;
                            message: string;
                            reasons: {
                                /** @enum {string} */
                                type: "field" | "resource";
                                key: string;
                                value: string;
                                message?: string;
                            }[];
                            /** @enum {string} */
                            code: "RESOURCE_COULD_NOT_BE_SAVED";
                            /** @enum {number} */
                            statusCode: 400;
                        } | {
                            error: string;
                            message: string;
                            /** @enum {string} */
                            code: "UNAUTHORIZED";
                            /** @enum {number} */
                            statusCode: 401;
                        } | {
                            message: string;
                            /** @enum {string} */
                            error: "Bad Request";
                            /** @enum {string} */
                            code: "VALIDATION";
                            /** @enum {number} */
                            statusCode: 400;
                            /** @enum {string} */
                            validationContext: "body" | "params" | "querystring" | "headers";
                            errors: {
                                title: string;
                                detail: string;
                                pointer: string;
                                keyword: string;
                            }[];
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
