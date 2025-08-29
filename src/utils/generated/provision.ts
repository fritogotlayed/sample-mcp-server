export interface paths {
    "/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a user record */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Identity ID or legacyExternalId of user */
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
                            /** Format: uuid */
                            id: string;
                            teamId: string | null;
                            instanceId: string | null;
                            followUpBoss: {
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                /** Format: uuid */
                                id: string;
                                followUpBossUserId: number;
                                /** Format: date-time */
                                followUpBossCreated: string;
                                followUpBossUpdated: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                assignedPeopleCount: number | null;
                            } | null;
                            activePipe: {
                                /** Format: uuid */
                                id: string;
                                activePipeUserId: number;
                                organisationalunitId: number;
                                email: string | null;
                                displayname: string | null;
                                firstname: string | null;
                                lastname: string | null;
                                website: string | null;
                                primaryphone: string | null;
                                title: string | null;
                                licence: string | null;
                                invitedAt: string | null;
                                suspendedAt: string | null;
                                firstactiveAt: string | null;
                                isInvitePending: boolean;
                                integrationName: string | null;
                                status: string | null;
                                timezone: string | null;
                                lastLogin: string | null;
                                activePipeCreatedAt: string | null;
                                activePipeCreatedBy: number | null;
                                activePipeModifiedAt: string | null;
                                activePipeModifiedBy: number | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            }[] | null;
                            continu: {
                                company: string;
                                first_name: string;
                                last_name: string;
                                email: string;
                                /** @description Id which represents role in Continu. Indirectly maps to role in identity. */
                                role: string;
                                image: string | null;
                                groups: string[] | null;
                                managing_groups: string[] | null;
                                /** Format: uuid */
                                id: string;
                                job_title: string | null;
                                linked_org_level: string | null;
                                first_login: string | null;
                                hired_on: string | null;
                                suspended_on: string | null;
                                full_name: string | null;
                                last_login: string | null;
                                userid: string | null;
                                is_manager: boolean | null;
                                linked_locations: string[] | null;
                                linked_teams: string[] | null;
                                linked_departments: string[] | null;
                                is_collaborator: boolean | null;
                                is_suspended: boolean | null;
                                language: string | null;
                                continuId: string;
                                continuCreatedAt: string;
                                continuUpdatedAt: string | null;
                                deletedAt: string | null;
                                /** Format: date-time */
                                updatedAt: string;
                                /** Format: date-time */
                                createdAt: string;
                            } | null;
                            marq: {
                                schemas: string[] | null;
                                userName: string | null;
                                name: {
                                    formatted: string;
                                    givenName: string;
                                    familyName: string;
                                } | null;
                                displayName: string | null;
                                emails: {
                                    value: string;
                                    primary: boolean;
                                }[] | null;
                                active: boolean;
                                meta: {
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null;
                                roles: string[] | null;
                                "urn:ietf:params:scim:schemas:extension:lucidpress:1.0:UserFields"?: {
                                    disclaimer: string | null;
                                    officeAddress: string | null;
                                    managingBrokerName: string | null;
                                    managingBrokerPhone: string | null;
                                    managingBrokerEmail: string | null;
                                    licenseType: string | null;
                                    agentLicenseNumber: string | null;
                                    jurisdiction: string | null;
                                    corporateLicenseNumber: string | null;
                                    dbaLlcDisclaimer: string | null;
                                    prospectDisclaimer: string | null;
                                } | null;
                                /** Format: uuid */
                                id: string;
                                marqId: string;
                                groups: {
                                    id: string;
                                }[] | null;
                                scimSchemaLucidchartV1User: {
                                    canEdit: boolean;
                                    addOns: string[];
                                } | null;
                                scimSchemaExtensionLucidV2User: {
                                    billingCode: string | null;
                                    userIdAtPrintVendor: string | null;
                                    officeIdAtPrintVendor: string | null;
                                    productLicenses: {
                                        Lucidpress?: boolean | null;
                                        Marq?: boolean | null;
                                    } | null;
                                } | null;
                                billingAdmin: boolean;
                                teamAdmin: boolean;
                                templateAdmin: boolean;
                                printApprover: boolean;
                                documentApprover: boolean;
                                analyticsUser: boolean;
                                dataAdmin: boolean;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            } | null;
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
    "/deprovisions/{deprovisionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a deprovision record by ID */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    deprovisionId: string;
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
                            /**
                             * Format: uuid
                             * @description Id of user within Identity-service that created the deprovision.
                             */
                            createdBy: string;
                            /**
                             * Format: email
                             * @description Email of user to be deprovisioned
                             */
                            email: string;
                            serviceNames: string[];
                            deletedAt: string | null;
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
    "/deprovisions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Create a deprovision to partially or completely deprovision a Side User. */
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
                        /**
                         * Format: email
                         * @description Email of user to deprovision.
                         */
                        email: string;
                        /**
                         * Format: uuid
                         * @description The Identity user id
                         */
                        userId?: string;
                        /** @description (Optional) TeamId of the user being deprovisioned. If omitted, the user must have a valid Follow Up Boss account for team lookup. */
                        teamId?: string;
                        /** @description Whether or not to apply deprovision action. */
                        dryRun?: boolean;
                        options?: {
                            followUpBoss?: {
                                /**
                                 * @description Whether or not to trash the people/contacts associated with the user within Follow Up Boss. By default, with this option disabled, the people assigned to the user will be assigned to the instance owner. Trashed contacts are labeled so that they can be recovered in the case of reprovision.
                                 * @default false
                                 */
                                trashPeople?: boolean;
                                disableChecks?: {
                                    /**
                                     * @description Disable check for if the user has people/contacts assigned to them in Follow Up Boss. Without this option an error will be thrown when attempting to deprovision a user with people assigned.
                                     * @default false
                                     */
                                    assignedPeople?: boolean;
                                    /**
                                     * @description Disable check for if the user was active within Follow Up Boss in the last 90 days. Without this option an error will be thrown when attempting to deprovision that has been active within the last 90 days.
                                     * @default false
                                     */
                                    recentlyActive?: boolean;
                                };
                            };
                            activePipe?: {
                                disableChecks?: {
                                    /**
                                     * @description Disable check for if the user was active within Activepipe in the last 90 days. Without this option an error will be thrown when attempting to deprovision users that have been active within the last 90 days.
                                     * @default false
                                     */
                                    recentlyActive?: boolean;
                                };
                            };
                            marq?: {
                                groupIds?: string[];
                            };
                        };
                        services?: {
                            /**
                             * @description Whether or not to include Follow Up Boss in user deprovision
                             * @default true
                             */
                            followUpBoss?: boolean;
                            /**
                             * @description Include Activepipe user in deprovision.
                             * @default false
                             */
                            activePipe?: boolean;
                            /**
                             * @description Include Marq user in deprovision
                             * @default false
                             */
                            marq?: boolean;
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
                            /**
                             * Format: uuid
                             * @description Id of deprovision record.
                             */
                            id: string;
                            userId: string | null;
                            /** Format: email */
                            email: string;
                            /**
                             * @description Whether or not the deprovision was a dry run.
                             * @default false
                             */
                            dryRun: boolean;
                            /**
                             * Format: uuid
                             * @description Id of user which created the deprovision request (matches id of user in identity-service).
                             */
                            createdBy: string;
                            team: {
                                id: string | null;
                            };
                            /** Format: date-time */
                            createdAt: string;
                            deletedAt: string | null;
                            /** Format: date-time */
                            updatedAt: string;
                            /**
                             * DeprovisionResults
                             * @description Results from deprovisioning user.
                             */
                            results: {
                                marq?: {
                                    /** @description Status of deprovision (i.e. success or failure). */
                                    status: string;
                                    /** @description Identity user id. */
                                    id: string;
                                    /** @description The Okta user id */
                                    externalId: string;
                                    /** @description The Marq user id */
                                    marqId: string;
                                    groups: string[];
                                } | {
                                    [key: string]: unknown;
                                };
                                activePipe?: ({
                                    /** @description Status of deprovision (i.e. success or failure). */
                                    status: string;
                                    id: number | null;
                                    /** @description Status of user within Follow Up Boss before deprovision. */
                                    beforeStatus: string;
                                    /** @description Status of user within Follow Up Boss after deprovision. If dryRun option is applied this will match beforeStatus. */
                                    afterStatus: string;
                                    /** @description The Activepipe organisationalunit.id the user was assigned to */
                                    activePipeOrganisationalUnitId: number;
                                    /** @description The FollowUpBoss user id */
                                    followUpBossUserId: number;
                                    user: {
                                        email: string;
                                        displayname: string | null;
                                        firstname: string | null;
                                        lastname: string | null;
                                        website: string | null;
                                        primaryphone: string | null;
                                        licence: string | null;
                                        status: string;
                                        timezone: string | null;
                                        /** Format: uuid */
                                        id: string;
                                        activePipeUserId: number;
                                        organisationalunitId: number;
                                        suspendedAt: string | null;
                                        firstactiveAt: string | null;
                                        isInvitePending: boolean;
                                        integrationName: string | null;
                                        integrations: {
                                            id: string;
                                            organisationalunitId: number;
                                            integrationUserId: string | null;
                                            lastsyncedAt: string | null;
                                            /** Format: date-time */
                                            activePipeCreatedAt: string;
                                            /** Format: date-time */
                                            activePipeModifiedAt: string;
                                            /** Format: date-time */
                                            createdAt: string;
                                            /** Format: date-time */
                                            updatedAt: string;
                                            deletedAt: string | null;
                                        }[];
                                        lastLogin: string | null;
                                        activePipeCreatedAt: string | null;
                                        activePipeModifiedAt: string | null;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                    };
                                } | {
                                    [key: string]: unknown;
                                })[];
                                followUpBoss?: {
                                    /** @description Status of deprovision (i.e. success or failure). */
                                    status: string;
                                    id: number | null;
                                    assignedTo: number | null;
                                    /** @description Number of people in Follow Up Boss assigned to the user to be deprovisioned. */
                                    assignedPeopleCount: number;
                                    /** @description Status of user within Follow Up Boss before deprovision. */
                                    beforeStatus: string;
                                    /** @description Status of user within Follow Up Boss after deprovision. If dryRun option is applied this will match beforeStatus. */
                                    afterStatus: string;
                                    user: {
                                        isOwner: boolean;
                                        name: string;
                                        firstName: string | null;
                                        lastName: string | null;
                                        email: string;
                                        leadEmailAddress: string;
                                        phone: string | null;
                                        role: string;
                                        status: string;
                                        timezone: string | null;
                                        lastSeenIos: string | null;
                                        lastSeenAndroid: string | null;
                                        lastSeenFub2: string | null;
                                        /** Format: uuid */
                                        id: string;
                                        followUpBossUserId: number;
                                        /** Format: date-time */
                                        followUpBossCreated: string;
                                        followUpBossUpdated: string | null;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                        assignedPeopleCount: number | null;
                                    };
                                    assignedPeopleIds: number[];
                                    activeNumbers: string[] | null;
                                    releasedNumbers: string[] | null;
                                    reclaimedNumbers: string[] | null;
                                } | {
                                    [key: string]: unknown;
                                };
                            };
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
    "/deprovisions/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Deprovision multiple users */
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
                        users?: {
                            /**
                             * Format: email
                             * @description Email of user to deprovision.
                             */
                            email: string;
                            /** @description (Optional) TeamId of the user being deprovisioned. If omitted, the user must have a valid Follow Up Boss account for team lookup. */
                            teamId?: string;
                            /**
                             * Format: uuid
                             * @description The Identity user id
                             */
                            userId?: string;
                            options?: {
                                followUpBoss?: {
                                    /**
                                     * @description Whether or not to trash the people/contacts associated with the user within Follow Up Boss. By default, with this option disabled, the people assigned to the user will be assigned to the instance owner. Trashed contacts are labeled so that they can be recovered in the case of reprovision.
                                     * @default false
                                     */
                                    trashPeople?: boolean;
                                    disableChecks?: {
                                        /**
                                         * @description Disable check for if the user has people/contacts assigned to them in Follow Up Boss. Without this option an error will be thrown when attempting to deprovision a user with people assigned.
                                         * @default false
                                         */
                                        assignedPeople?: boolean;
                                        /**
                                         * @description Disable check for if the user was active within Follow Up Boss in the last 90 days. Without this option an error will be thrown when attempting to deprovision that has been active within the last 90 days.
                                         * @default false
                                         */
                                        recentlyActive?: boolean;
                                    };
                                };
                                activePipe?: {
                                    disableChecks?: {
                                        /**
                                         * @description Disable check for if the user was active within Activepipe in the last 90 days. Without this option an error will be thrown when attempting to deprovision users that have been active within the last 90 days.
                                         * @default false
                                         */
                                        recentlyActive?: boolean;
                                    };
                                };
                                marq?: {
                                    groupIds?: string[];
                                };
                            };
                            services?: {
                                /**
                                 * @description Whether or not to include Follow Up Boss in user deprovision
                                 * @default true
                                 */
                                followUpBoss?: boolean;
                                /**
                                 * @description Include Activepipe user in deprovision.
                                 * @default false
                                 */
                                activePipe?: boolean;
                                /**
                                 * @description Include Marq user in deprovision
                                 * @default false
                                 */
                                marq?: boolean;
                            };
                        }[];
                        /** @description Array of emails to deprovision */
                        emails?: string[];
                        /**
                         * @description Whether or not to apply deprovision action. Applies to all users.
                         * @default false
                         */
                        dryRun: boolean;
                        options?: {
                            followUpBoss?: {
                                /**
                                 * @description Whether or not to trash the people/contacts associated with the user within Follow Up Boss. By default, with this option disabled, the people assigned to the user will be assigned to the instance owner. Trashed contacts are labeled so that they can be recovered in the case of reprovision.
                                 * @default false
                                 */
                                trashPeople?: boolean;
                                disableChecks?: {
                                    /**
                                     * @description Disable check for if the user has people/contacts assigned to them in Follow Up Boss. Without this option an error will be thrown when attempting to deprovision a user with people assigned.
                                     * @default false
                                     */
                                    assignedPeople?: boolean;
                                    /**
                                     * @description Disable check for if the user was active within Follow Up Boss in the last 90 days. Without this option an error will be thrown when attempting to deprovision that has been active within the last 90 days.
                                     * @default false
                                     */
                                    recentlyActive?: boolean;
                                };
                            };
                            activePipe?: {
                                disableChecks?: {
                                    /**
                                     * @description Disable check for if the user was active within Activepipe in the last 90 days. Without this option an error will be thrown when attempting to deprovision users that have been active within the last 90 days.
                                     * @default false
                                     */
                                    recentlyActive?: boolean;
                                };
                            };
                            marq?: {
                                groupIds?: string[];
                            };
                        };
                        services?: {
                            /**
                             * @description Whether or not to include Follow Up Boss in user deprovision
                             * @default true
                             */
                            followUpBoss?: boolean;
                            /**
                             * @description Include Activepipe user in deprovision.
                             * @default false
                             */
                            activePipe?: boolean;
                            /**
                             * @description Include Marq user in deprovision
                             * @default false
                             */
                            marq?: boolean;
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
                            successes: {
                                /**
                                 * Format: uuid
                                 * @description Id of deprovision record.
                                 */
                                id: string;
                                userId: string | null;
                                /** Format: email */
                                email: string;
                                /**
                                 * @description Whether or not the deprovision was a dry run.
                                 * @default false
                                 */
                                dryRun: boolean;
                                /**
                                 * Format: uuid
                                 * @description Id of user which created the deprovision request (matches id of user in identity-service).
                                 */
                                createdBy: string;
                                team: {
                                    id: string | null;
                                };
                                /** Format: date-time */
                                createdAt: string;
                                deletedAt: string | null;
                                /** Format: date-time */
                                updatedAt: string;
                                /** @description Results from deprovisioning user. */
                                results: {
                                    marq?: {
                                        /** @description Status of deprovision (i.e. success or failure). */
                                        status: string;
                                        /** @description Identity user id. */
                                        id: string;
                                        /** @description The Okta user id */
                                        externalId: string;
                                        /** @description The Marq user id */
                                        marqId: string;
                                        groups: string[];
                                    } | {
                                        [key: string]: unknown;
                                    };
                                    activePipe?: ({
                                        /** @description Status of deprovision (i.e. success or failure). */
                                        status: string;
                                        id: number | null;
                                        /** @description Status of user within Follow Up Boss before deprovision. */
                                        beforeStatus: string;
                                        /** @description Status of user within Follow Up Boss after deprovision. If dryRun option is applied this will match beforeStatus. */
                                        afterStatus: string;
                                        /** @description The Activepipe organisationalunit.id the user was assigned to */
                                        activePipeOrganisationalUnitId: number;
                                        /** @description The FollowUpBoss user id */
                                        followUpBossUserId: number;
                                        user: {
                                            email: string;
                                            displayname: string | null;
                                            firstname: string | null;
                                            lastname: string | null;
                                            website: string | null;
                                            primaryphone: string | null;
                                            licence: string | null;
                                            status: string;
                                            timezone: string | null;
                                            /** Format: uuid */
                                            id: string;
                                            activePipeUserId: number;
                                            organisationalunitId: number;
                                            suspendedAt: string | null;
                                            firstactiveAt: string | null;
                                            isInvitePending: boolean;
                                            integrationName: string | null;
                                            integrations: {
                                                id: string;
                                                organisationalunitId: number;
                                                integrationUserId: string | null;
                                                lastsyncedAt: string | null;
                                                /** Format: date-time */
                                                activePipeCreatedAt: string;
                                                /** Format: date-time */
                                                activePipeModifiedAt: string;
                                                /** Format: date-time */
                                                createdAt: string;
                                                /** Format: date-time */
                                                updatedAt: string;
                                                deletedAt: string | null;
                                            }[];
                                            lastLogin: string | null;
                                            activePipeCreatedAt: string | null;
                                            activePipeModifiedAt: string | null;
                                            /** Format: date-time */
                                            createdAt: string;
                                            /** Format: date-time */
                                            updatedAt: string;
                                            deletedAt: string | null;
                                        };
                                    } | {
                                        [key: string]: unknown;
                                    })[];
                                    followUpBoss?: {
                                        /** @description Status of deprovision (i.e. success or failure). */
                                        status: string;
                                        id: number | null;
                                        assignedTo: number | null;
                                        /** @description Number of people in Follow Up Boss assigned to the user to be deprovisioned. */
                                        assignedPeopleCount: number;
                                        /** @description Status of user within Follow Up Boss before deprovision. */
                                        beforeStatus: string;
                                        /** @description Status of user within Follow Up Boss after deprovision. If dryRun option is applied this will match beforeStatus. */
                                        afterStatus: string;
                                        user: {
                                            isOwner: boolean;
                                            name: string;
                                            firstName: string | null;
                                            lastName: string | null;
                                            email: string;
                                            leadEmailAddress: string;
                                            phone: string | null;
                                            role: string;
                                            status: string;
                                            timezone: string | null;
                                            lastSeenIos: string | null;
                                            lastSeenAndroid: string | null;
                                            lastSeenFub2: string | null;
                                            /** Format: uuid */
                                            id: string;
                                            followUpBossUserId: number;
                                            /** Format: date-time */
                                            followUpBossCreated: string;
                                            followUpBossUpdated: string | null;
                                            /** Format: date-time */
                                            createdAt: string;
                                            /** Format: date-time */
                                            updatedAt: string;
                                            deletedAt: string | null;
                                            assignedPeopleCount: number | null;
                                        };
                                        assignedPeopleIds: number[];
                                        activeNumbers: string[] | null;
                                        releasedNumbers: string[] | null;
                                        reclaimedNumbers: string[] | null;
                                    } | {
                                        [key: string]: unknown;
                                    };
                                };
                            }[];
                            errors: {
                                code?: string;
                                message: string | {
                                    code?: string;
                                    name?: string;
                                    message: string;
                                    statusCode?: number;
                                }[];
                                name?: string;
                                statusCode?: number;
                                config?: {
                                    /** Format: email */
                                    email: string;
                                    /** Format: uuid */
                                    userId?: string;
                                    teamId?: string;
                                    /** @description Whether or not to apply deprovision action. */
                                    dryRun?: boolean;
                                    options?: {
                                        followUpBoss?: {
                                            /**
                                             * @description Whether or not to trash the people/contacts associated with the user within Follow Up Boss. By default, with this option disabled, the people assigned to the user will be assigned to the instance owner. Trashed contacts are labeled so that they can be recovered in the case of reprovision.
                                             * @default false
                                             */
                                            trashPeople: boolean;
                                            disableChecks?: {
                                                /**
                                                 * @description Disable check for if the user has people/contacts assigned to them in Follow Up Boss. Without this option an error will be thrown when attempting to deprovision a user with people assigned.
                                                 * @default false
                                                 */
                                                assignedPeople: boolean;
                                                /**
                                                 * @description Disable check for if the user was active within Follow Up Boss in the last 90 days. Without this option an error will be thrown when attempting to deprovision that has been active within the last 90 days.
                                                 * @default false
                                                 */
                                                recentlyActive: boolean;
                                            };
                                        };
                                        activePipe?: {
                                            disableChecks?: {
                                                /**
                                                 * @description Disable check for if the user was active within Activepipe in the last 90 days. Without this option an error will be thrown when attempting to deprovision users that have been active within the last 90 days.
                                                 * @default false
                                                 */
                                                recentlyActive: boolean;
                                            };
                                        };
                                        marq?: {
                                            groupIds?: string[];
                                        };
                                    };
                                    services?: {
                                        /**
                                         * @description Whether or not to include Follow Up Boss in user deprovision
                                         * @default true
                                         */
                                        followUpBoss: boolean;
                                        /**
                                         * @description Include Activepipe user in deprovision.
                                         * @default false
                                         */
                                        activePipe: boolean;
                                        /**
                                         * @description Include Marq user in deprovision
                                         * @default false
                                         */
                                        marq: boolean;
                                    };
                                };
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
    "/provisions/{provisionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a provision record by ID */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    provisionId: string;
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
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: email */
                            email: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            results: {
                                marq?: {
                                    /** @description Status of provisioning Marq for user. NOTE: Request does not fail if provisioning of a single service fails since there are many. */
                                    status: string;
                                    user: {
                                        schemas: string[] | null;
                                        userName: string | null;
                                        name: {
                                            formatted: string;
                                            givenName: string;
                                            familyName: string;
                                        } | null;
                                        displayName: string | null;
                                        emails: {
                                            value: string;
                                            primary: boolean;
                                        }[] | null;
                                        active: boolean;
                                        meta: {
                                            resourceType: string | null;
                                            created: string | null;
                                            lastModified: string | null;
                                            version: string | null;
                                            location: string | null;
                                        } | null;
                                        roles: string[] | null;
                                        "urn:ietf:params:scim:schemas:extension:lucidpress:1.0:UserFields"?: {
                                            disclaimer: string | null;
                                            officeAddress: string | null;
                                            managingBrokerName: string | null;
                                            managingBrokerPhone: string | null;
                                            managingBrokerEmail: string | null;
                                            licenseType: string | null;
                                            agentLicenseNumber: string | null;
                                            jurisdiction: string | null;
                                            corporateLicenseNumber: string | null;
                                            dbaLlcDisclaimer: string | null;
                                            prospectDisclaimer: string | null;
                                        } | null;
                                        /** Format: uuid */
                                        id: string;
                                        marqId: string;
                                        identityUser: {
                                            id: string;
                                        } | null;
                                        groups: {
                                            id: string;
                                        }[] | null;
                                        scimSchemaLucidchartV1User: {
                                            canEdit: boolean;
                                            addOns: string[];
                                        } | null;
                                        scimSchemaExtensionLucidV2User: {
                                            billingCode: string | null;
                                            userIdAtPrintVendor: string | null;
                                            officeIdAtPrintVendor: string | null;
                                            productLicenses: {
                                                Lucidpress?: boolean | null;
                                                Marq?: boolean | null;
                                            } | null;
                                        } | null;
                                        billingAdmin: boolean;
                                        teamAdmin: boolean;
                                        templateAdmin: boolean;
                                        printApprover: boolean;
                                        documentApprover: boolean;
                                        analyticsUser: boolean;
                                        dataAdmin: boolean;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                    };
                                    /** @description Additional provisioning notes. */
                                    notes?: string;
                                };
                                followUpBoss?: {
                                    /** @description Status of provisioning Follow Up Boss for user. NOTE: Request does not fail if provisioning of a single service fails since there are many. */
                                    status: string;
                                    user: {
                                        isOwner: boolean;
                                        name: string;
                                        firstName: string | null;
                                        lastName: string | null;
                                        email: string;
                                        leadEmailAddress: string;
                                        phone: string | null;
                                        role: string;
                                        status: string;
                                        timezone: string | null;
                                        lastSeenIos: string | null;
                                        lastSeenAndroid: string | null;
                                        lastSeenFub2: string | null;
                                        /** Format: uuid */
                                        id: string;
                                        followUpBossUserId: number;
                                        /** Format: date-time */
                                        followUpBossCreated: string;
                                        followUpBossUpdated: string | null;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                        assignedPeopleCount: number | null;
                                    };
                                };
                                activePipe?: {
                                    /** @description Status of provisioning ActivePipe for user. NOTE: Request does not fail if provisioning of a single service fails since there are many. */
                                    status: string;
                                    user: {
                                        email: string;
                                        displayname: string | null;
                                        firstname: string | null;
                                        lastname: string | null;
                                        website: string | null;
                                        primaryphone: string | null;
                                        licence: string | null;
                                        status: string;
                                        timezone: string | null;
                                        /** Format: uuid */
                                        id: string;
                                        activePipeUserId: number;
                                        organisationalunitId: number;
                                        suspendedAt: string | null;
                                        firstactiveAt: string | null;
                                        isInvitePending: boolean;
                                        integrationName: string | null;
                                        integrations: {
                                            id: string;
                                            organisationalunitId: number;
                                            integrationUserId: string | null;
                                            lastsyncedAt: string | null;
                                            /** Format: date-time */
                                            activePipeCreatedAt: string;
                                            /** Format: date-time */
                                            activePipeModifiedAt: string;
                                            /** Format: date-time */
                                            createdAt: string;
                                            /** Format: date-time */
                                            updatedAt: string;
                                            deletedAt: string | null;
                                        }[];
                                        lastLogin: string | null;
                                        activePipeCreatedAt: string | null;
                                        activePipeModifiedAt: string | null;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
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
    "/provisions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Create a provision to partially or completely provision a Side User. Currently only provisions within Follow Up Boss. */
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
                        /** Format: email */
                        email: string;
                        teamId?: string;
                        /** Format: uuid */
                        instanceId?: string;
                        firstName?: string;
                        lastName?: string;
                        dryRun?: boolean;
                        services?: {
                            marq?: boolean;
                            followUpBoss?: boolean;
                            activePipe?: boolean;
                        };
                        fields?: {
                            marq?: {
                                groupId?: string;
                                roles: {
                                    templateAdmin: boolean;
                                    printApprover: boolean;
                                    documentApprover: boolean;
                                    analyticsUser: boolean;
                                    dataAdmin: boolean;
                                };
                            };
                            /** @description Additional fields to submit when provisioning a new Activepipe user. */
                            activePipe?: {
                                [key: string]: unknown;
                            };
                            followUpBoss?: {
                                role: "Agent" | "Admin" | "Broker" | "Lender";
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
                            /** Format: uuid */
                            id: string;
                            /** Format: uuid */
                            teamId?: string;
                            /** Format: email */
                            email: string;
                            /** Format: uuid */
                            createdBy: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            results: {
                                marq?: {
                                    /** @description Status of provisioning Marq for user. NOTE: Request does not fail if provisioning of a single service fails since there are many. */
                                    status: string;
                                    user: {
                                        schemas: string[] | null;
                                        userName: string | null;
                                        name: {
                                            formatted: string;
                                            givenName: string;
                                            familyName: string;
                                        } | null;
                                        displayName: string | null;
                                        emails: {
                                            value: string;
                                            primary: boolean;
                                        }[] | null;
                                        active: boolean;
                                        meta: {
                                            resourceType: string | null;
                                            created: string | null;
                                            lastModified: string | null;
                                            version: string | null;
                                            location: string | null;
                                        } | null;
                                        roles: string[] | null;
                                        "urn:ietf:params:scim:schemas:extension:lucidpress:1.0:UserFields"?: {
                                            disclaimer: string | null;
                                            officeAddress: string | null;
                                            managingBrokerName: string | null;
                                            managingBrokerPhone: string | null;
                                            managingBrokerEmail: string | null;
                                            licenseType: string | null;
                                            agentLicenseNumber: string | null;
                                            jurisdiction: string | null;
                                            corporateLicenseNumber: string | null;
                                            dbaLlcDisclaimer: string | null;
                                            prospectDisclaimer: string | null;
                                        } | null;
                                        /** Format: uuid */
                                        id: string;
                                        marqId: string;
                                        identityUser: {
                                            id: string;
                                        } | null;
                                        groups: {
                                            id: string;
                                        }[] | null;
                                        scimSchemaLucidchartV1User: {
                                            canEdit: boolean;
                                            addOns: string[];
                                        } | null;
                                        scimSchemaExtensionLucidV2User: {
                                            billingCode: string | null;
                                            userIdAtPrintVendor: string | null;
                                            officeIdAtPrintVendor: string | null;
                                            productLicenses: {
                                                Lucidpress?: boolean | null;
                                                Marq?: boolean | null;
                                            } | null;
                                        } | null;
                                        billingAdmin: boolean;
                                        teamAdmin: boolean;
                                        templateAdmin: boolean;
                                        printApprover: boolean;
                                        documentApprover: boolean;
                                        analyticsUser: boolean;
                                        dataAdmin: boolean;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                    };
                                    /** @description Additional provisioning notes. */
                                    notes?: string;
                                };
                                followUpBoss?: {
                                    /** @description Status of provisioning Follow Up Boss for user. NOTE: Request does not fail if provisioning of a single service fails since there are many. */
                                    status: string;
                                    user: {
                                        isOwner: boolean;
                                        name: string;
                                        firstName: string | null;
                                        lastName: string | null;
                                        email: string;
                                        leadEmailAddress: string;
                                        phone: string | null;
                                        role: string;
                                        status: string;
                                        timezone: string | null;
                                        lastSeenIos: string | null;
                                        lastSeenAndroid: string | null;
                                        lastSeenFub2: string | null;
                                        /** Format: uuid */
                                        id: string;
                                        followUpBossUserId: number;
                                        /** Format: date-time */
                                        followUpBossCreated: string;
                                        followUpBossUpdated: string | null;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                        assignedPeopleCount: number | null;
                                    };
                                };
                                activePipe?: {
                                    /** @description Status of provisioning ActivePipe for user. NOTE: Request does not fail if provisioning of a single service fails since there are many. */
                                    status: string;
                                    user: {
                                        email: string;
                                        displayname: string | null;
                                        firstname: string | null;
                                        lastname: string | null;
                                        website: string | null;
                                        primaryphone: string | null;
                                        licence: string | null;
                                        status: string;
                                        timezone: string | null;
                                        /** Format: uuid */
                                        id: string;
                                        activePipeUserId: number;
                                        organisationalunitId: number;
                                        suspendedAt: string | null;
                                        firstactiveAt: string | null;
                                        isInvitePending: boolean;
                                        integrationName: string | null;
                                        integrations: {
                                            id: string;
                                            organisationalunitId: number;
                                            integrationUserId: string | null;
                                            lastsyncedAt: string | null;
                                            /** Format: date-time */
                                            activePipeCreatedAt: string;
                                            /** Format: date-time */
                                            activePipeModifiedAt: string;
                                            /** Format: date-time */
                                            createdAt: string;
                                            /** Format: date-time */
                                            updatedAt: string;
                                            deletedAt: string | null;
                                        }[];
                                        lastLogin: string | null;
                                        activePipeCreatedAt: string | null;
                                        activePipeModifiedAt: string | null;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                    };
                                };
                            };
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
    "/continu/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Sync Continu data to provision DB. */
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
                    content?: never;
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
    "/active-pipe/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get ActivePipe user and check ActivePipe repository status */
        get: {
            parameters: {
                query?: {
                    unassigned?: boolean;
                    email?: string;
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
                            email: string;
                            displayname: string | null;
                            firstname: string | null;
                            lastname: string | null;
                            website: string | null;
                            primaryphone: string | null;
                            licence: string | null;
                            status: string;
                            timezone: string | null;
                            /** Format: uuid */
                            id: string;
                            activePipeUserId: number;
                            organisationalunitId: number;
                            suspendedAt: string | null;
                            firstactiveAt: string | null;
                            isInvitePending: boolean;
                            integrationName: string | null;
                            integrations: {
                                id: string;
                                organisationalunitId: number;
                                integrationUserId: string | null;
                                lastsyncedAt: string | null;
                                /** Format: date-time */
                                activePipeCreatedAt: string;
                                /** Format: date-time */
                                activePipeModifiedAt: string;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            }[];
                            lastLogin: string | null;
                            activePipeCreatedAt: string | null;
                            activePipeModifiedAt: string | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                        } | {
                            activePipeUser: {
                                can_switch_to?: boolean;
                                city?: string;
                                country?: string;
                                created_at?: string;
                                created_by?: number;
                                displayname?: string | null;
                                email?: string;
                                facebook?: string | null;
                                fax?: string | null;
                                features?: string[];
                                firstactive_at?: string | null;
                                firstname?: string | null;
                                fromemail?: string | null;
                                fromname?: string | null;
                                homeprezzo_email?: string | null;
                                id?: number;
                                in_sponsored_org_or_brand?: boolean;
                                instagram?: string | null;
                                integration_id?: string | null;
                                invited_at?: string | null;
                                is_invite_pending?: boolean;
                                is_platform_wide?: boolean;
                                language?: string | null;
                                last_login?: string | null;
                                lastname?: string | null;
                                latitude?: string | null;
                                licence?: string | null;
                                linkedin?: string | null;
                                listing_agents?: {
                                    created_source: string;
                                    id: number;
                                    type: string;
                                    value: string;
                                }[] | null;
                                logo?: string | null;
                                longitude?: string | null;
                                metadata?: {
                                    [key: string]: unknown;
                                } | null;
                                modified_at?: string | null;
                                modified_by?: number | null;
                                notification_preferences?: {
                                    [key: string]: {
                                        [key: string]: {
                                            frequency: string;
                                            kind: string;
                                            medium: string;
                                        };
                                    };
                                } | null;
                                offset?: number | null;
                                /** ActivePipeOrganisationalUnit */
                                organisationalunit?: {
                                    brand: {
                                        contents: string | null;
                                        created_at: string;
                                        created_by: number;
                                        deleted_at: string | null;
                                        deleted_by: number | null;
                                        features: string[] | null;
                                        id: number;
                                        leadgenstylesheet: string | null;
                                        modified_at: string | null;
                                        modified_by: number | null;
                                        name: string | null;
                                        options: string | null;
                                        salesforce_account_id: string | null;
                                        sponsorship: boolean;
                                        styles: string | null;
                                    } | null;
                                    city: string | null;
                                    communicationcategory_type: string | null;
                                    country: string | null;
                                    deferredbouncepolicy: string | null;
                                    disclaimer: string | null;
                                    endtrial_at: string | null;
                                    facebook: string | null;
                                    fax: string | null;
                                    features: string[] | null;
                                    firstlive_at: string | null;
                                    fromdomains: string[];
                                    googleanalytics: boolean;
                                    id: number;
                                    instagram: string | null;
                                    language: string | null;
                                    latitude: string | null;
                                    licence: string | null;
                                    linkedin: string | null;
                                    logo: string | null;
                                    longitude: string | null;
                                    metadata: string | null;
                                    name: string;
                                    officename: string | null;
                                    package_subscriptions: {
                                        billing_entity_id: number | null;
                                        created_at: string;
                                        created_by: number;
                                        deleted_at: string | null;
                                        deleted_by: string | null;
                                        id: number | null;
                                        modified_at: string | null;
                                        modified_by: number | null;
                                        package_id: number | null;
                                        quantity: number | null;
                                        status: string | null;
                                        subscriber_id: number | null;
                                        subscriber_type: string | null;
                                    }[] | null;
                                    pinterest: string | null;
                                    postcode: string | null;
                                    primaryphone: string | null;
                                    product: string | null;
                                    recipients: unknown[] | null;
                                    region: string | null;
                                    replytodomains: string[];
                                    rss_feeds: string[] | null;
                                    salesforce_account_id: string | null;
                                    secondaryphone: string | null;
                                    settings: {
                                        id: number;
                                        kind: string;
                                        value: string;
                                    }[] | null;
                                    sms_templates: unknown | null;
                                    state: string | null;
                                    status: string | null;
                                    streetname: string | null;
                                    streetnumber: string | null;
                                    templates: {
                                        [key: string]: unknown;
                                    }[] | null;
                                    terradatum: string | null;
                                    themes: {
                                        [key: string]: unknown;
                                    }[] | null;
                                    ticketnumber: number | null;
                                    timezone: string | null;
                                    twitter: string | null;
                                    users_integration_name: string | null;
                                    users_managed_externally: boolean;
                                    vertical: string | null;
                                    vimeo: string | null;
                                    website: string | null;
                                    youtube: string | null;
                                    integrations: {
                                        id: number;
                                        integrationtype: string | null;
                                        provider_id: number;
                                        timezone: string;
                                        title: string | null;
                                        notes: string | null;
                                        disclaimer: string | null;
                                        apikey: string | null;
                                        office_id: string | null;
                                        client_id: number | null;
                                        username: string | null;
                                        password: string | null;
                                        host: string | null;
                                        customparameters: string | null;
                                        sync_status: string | null;
                                        migration: boolean;
                                        last_error: string | null;
                                        lastsynced_at: string | null;
                                        lastconsumed_at: string | null;
                                        /** Format: date-time */
                                        created_at: string;
                                        created_by: number;
                                        modified_at: string | null;
                                        modified_by: number | null;
                                        deleted_at: string | null;
                                        deleted_by: number | null;
                                        linkable: boolean;
                                        oauth_refreshtoken: string | null;
                                        oauth_accesstoken: string | null;
                                        apikey_original: string | null;
                                        client_id_original: string | null;
                                        password_original: string | null;
                                        access_token_expires_at: string | null;
                                    }[];
                                };
                                package_subscriptions?: {
                                    billing_entity_id: number | null;
                                    created_at: string;
                                    created_by: number;
                                    deleted_at: string | null;
                                    deleted_by: string | null;
                                    id: number | null;
                                    modified_at: string | null;
                                    modified_by: number | null;
                                    package_id: number | null;
                                    quantity: number | null;
                                    status: string | null;
                                    subscriber_id: number | null;
                                    subscriber_type: string | null;
                                }[] | null;
                                photo?: string | null;
                                pinterest?: string | null;
                                postcode?: string | null;
                                primary_authentication_username?: string | null;
                                primaryphone?: string | null;
                                property_defaultintegrations?: number[] | null;
                                property_url?: string | null;
                                recipients?: unknown[] | null;
                                region?: string | null;
                                replytoemail?: string | null;
                                replytoname?: string | null;
                                roles?: string[] | null;
                                secondaryphone?: string | null;
                                smart_send_notification?: string | null;
                                source?: string | null;
                                sourceid?: number | null;
                                sponsorship_id?: number | null;
                                state?: string | null;
                                status?: string;
                                streetname?: string | null;
                                streetnumber?: string | null;
                                suspended_at?: string | null;
                                ticketnumber?: number | null;
                                timezone?: string | null;
                                title?: string | null;
                                twitter?: string | null;
                                user_integrations?: {
                                    id: number;
                                    user_id: number;
                                    organisationalunit_id: number;
                                    integration_userid: string;
                                    lastsynced_at: string | null;
                                    /** Format: date-time */
                                    created_at: string;
                                    /** Format: date-time */
                                    modified_at: string;
                                }[];
                                user_type?: string | null;
                                usernames?: string[] | null;
                                vimeo?: string | null;
                                website?: string | null;
                                youtube?: string | null;
                            } | null;
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
    "/active-pipe/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get ActivePipe users */
        get: {
            parameters: {
                query?: {
                    unassigned?: boolean;
                    email?: string;
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
                            email: string;
                            displayname: string | null;
                            firstname: string | null;
                            lastname: string | null;
                            website: string | null;
                            primaryphone: string | null;
                            licence: string | null;
                            status: string;
                            timezone: string | null;
                            /** Format: uuid */
                            id: string;
                            activePipeUserId: number;
                            organisationalunitId: number;
                            suspendedAt: string | null;
                            firstactiveAt: string | null;
                            isInvitePending: boolean;
                            integrationName: string | null;
                            integrations: {
                                id: string;
                                organisationalunitId: number;
                                integrationUserId: string | null;
                                lastsyncedAt: string | null;
                                /** Format: date-time */
                                activePipeCreatedAt: string;
                                /** Format: date-time */
                                activePipeModifiedAt: string;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            }[];
                            lastLogin: string | null;
                            activePipeCreatedAt: string | null;
                            activePipeModifiedAt: string | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
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
    "/active-pipe/offices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get ActivePipe offices not assigned to a team */
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
                            /** Format: uuid */
                            id: string;
                            organisationalunitId: number;
                            name: string | null;
                            officename: string | null;
                            state: string | null;
                            city: string | null;
                            postcode: string | null;
                            region: string | null;
                            website: string | null;
                            licence: string | null;
                            logo: string | null;
                            fromdomains: string[];
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
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
    "/teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get list of teams configured within provision-service. */
        get: {
            parameters: {
                query?: {
                    limit?: number;
                    offset?: number;
                    /** @description Filter to only teams which have Follow Up Boss admin account configured within provision-service. */
                    followUpBossAdminConfigured?: boolean;
                    /** @description Filter to only teams which have Follow Up Boss API Key configured within provision-service. */
                    followUpBossKeyConfigured?: boolean;
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
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                followUpBossInstances: {
                                    /** Format: uuid */
                                    id: string;
                                    name: string | null;
                                    adminEmail: string | null;
                                    instanceApiKey: string | null;
                                    billingAccountId: string | null;
                                    supportTier: number | null;
                                    luxuryPresenceApiKey: string | null;
                                    pixelWidgetTrackerCode: string | null;
                                    websiteTrackerCustomerTag: string | null;
                                    websiteTrackerLoaderCode: string | null;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                    followUpBossUsers: {
                                        isOwner: boolean;
                                        name: string;
                                        firstName: string | null;
                                        lastName: string | null;
                                        email: string;
                                        leadEmailAddress: string;
                                        phone: string | null;
                                        role: string;
                                        status: string;
                                        timezone: string | null;
                                        lastSeenIos: string | null;
                                        lastSeenAndroid: string | null;
                                        lastSeenFub2: string | null;
                                        /** Format: uuid */
                                        id: string;
                                        followUpBossUserId: number;
                                        /** Format: date-time */
                                        followUpBossCreated: string;
                                        followUpBossUpdated: string | null;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                        assignedPeopleCount: number | null;
                                    }[] | null;
                                    lastReportId: string | null;
                                    lastReport: {
                                        /** Format: uuid */
                                        id: string;
                                        releasedPhoneNumbers: {
                                            id: number;
                                            name: string;
                                            type: string;
                                            status: string;
                                            phone: string;
                                            locked: boolean;
                                            label: string | null;
                                            ported: boolean;
                                            email?: string;
                                        }[] | null;
                                        errors: {
                                            message: string;
                                            code?: string;
                                            statusCode?: number;
                                        }[] | null;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                    } | null;
                                }[] | null;
                                activePipeOffices: {
                                    /** Format: uuid */
                                    id: string;
                                    organisationalunitId: number;
                                    name: string | null;
                                    officename: string | null;
                                    state: string | null;
                                    city: string | null;
                                    postcode: string | null;
                                    region: string | null;
                                    website: string | null;
                                    licence: string | null;
                                    logo: string | null;
                                    fromdomains: string[];
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                }[] | null;
                                continuTeams: {
                                    company: string;
                                    name: string;
                                    /** Format: uuid */
                                    id: string;
                                    continuId: string;
                                    show_external: boolean | null;
                                    level: number | null;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                }[] | null;
                                marqGroups: {
                                    schemas?: string[];
                                    displayName?: string | null;
                                    meta?: ({
                                        resourceType: string | null;
                                        created: string | null;
                                        lastModified: string | null;
                                        version: string | null;
                                        location: string | null;
                                    } | null) & ({
                                        resourceType: string | null;
                                        created: string | null;
                                        lastModified: string | null;
                                        version: string | null;
                                        location: string | null;
                                    } | null);
                                    /** Format: uuid */
                                    id?: string;
                                    groupId?: string;
                                    teams?: {
                                        id: string;
                                    }[] | null;
                                    members?: {
                                        id: string;
                                    }[] | null;
                                    /** Format: date-time */
                                    createdAt?: string;
                                    /** Format: date-time */
                                    updatedAt?: string;
                                    deletedAt?: string | null;
                                }[] | null;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        /** @description Create a team within provision system. ID parameter must match identity team - this information is currently found within <a target="_blank" href="https://agent.sideinc.com/identity/admin/teams">Teams page</a>. */
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
                        /** @description Id of team within identity system. This can be found by visiting <a target="_blank" href="https://agent.sideinc.com/identity/admin/teams">Teams page</a>. */
                        id: string;
                        followUpBossInstances?: {
                            /** @description Name of instance (to separate from other instances owned by the team). */
                            name?: string;
                            /**
                             * Format: email
                             * @description Email of admin user for managing Follow Up Boss
                             */
                            adminEmail?: string;
                            /** @description Billing account id for instance (from Follow Up Boss billing reports). Can only be set after we receive report with instance included. */
                            billingAccountId?: string;
                            /** @description API key for Follow Up Boss instance. */
                            instanceApiKey?: string;
                            /** @description Number indicating the tier of Follow Up Boss support. */
                            supportTier?: number;
                            /** @description API key for FUB instance which is to be used by Luxury Presence. */
                            luxuryPresenceApiKey?: string;
                            /** @description Deprecated. */
                            pixelWidgetTrackerCode?: string;
                            /** @description Tag for Follow Up Boss website tracker integration (a.k.a "Pixel Widget") */
                            websiteTrackerCustomerTag?: string;
                            /** @description Code for Follow Up Boss website tracker integration (a.k.a "Pixel Widget") */
                            websiteTrackerLoaderCode?: string;
                        }[];
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
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            followUpBossInstances: {
                                /** Format: uuid */
                                id: string;
                                name: string | null;
                                adminEmail: string | null;
                                instanceApiKey: string | null;
                                billingAccountId: string | null;
                                supportTier: number | null;
                                luxuryPresenceApiKey: string | null;
                                pixelWidgetTrackerCode: string | null;
                                websiteTrackerCustomerTag: string | null;
                                websiteTrackerLoaderCode: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                followUpBossUsers: {
                                    isOwner: boolean;
                                    name: string;
                                    firstName: string | null;
                                    lastName: string | null;
                                    email: string;
                                    leadEmailAddress: string;
                                    phone: string | null;
                                    role: string;
                                    status: string;
                                    timezone: string | null;
                                    lastSeenIos: string | null;
                                    lastSeenAndroid: string | null;
                                    lastSeenFub2: string | null;
                                    /** Format: uuid */
                                    id: string;
                                    followUpBossUserId: number;
                                    /** Format: date-time */
                                    followUpBossCreated: string;
                                    followUpBossUpdated: string | null;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                    assignedPeopleCount: number | null;
                                }[] | null;
                                lastReportId: string | null;
                                lastReport: {
                                    /** Format: uuid */
                                    id: string;
                                    releasedPhoneNumbers: {
                                        id: number;
                                        name: string;
                                        type: string;
                                        status: string;
                                        phone: string;
                                        locked: boolean;
                                        label: string | null;
                                        ported: boolean;
                                        email?: string;
                                    }[] | null;
                                    errors: {
                                        message: string;
                                        code?: string;
                                        statusCode?: number;
                                    }[] | null;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                } | null;
                            }[] | null;
                            activePipeOffices: {
                                /** Format: uuid */
                                id: string;
                                organisationalunitId: number;
                                name: string | null;
                                officename: string | null;
                                state: string | null;
                                city: string | null;
                                postcode: string | null;
                                region: string | null;
                                website: string | null;
                                licence: string | null;
                                logo: string | null;
                                fromdomains: string[];
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            }[] | null;
                            continuTeams: {
                                company: string;
                                name: string;
                                /** Format: uuid */
                                id: string;
                                continuId: string;
                                show_external: boolean | null;
                                level: number | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            }[] | null;
                            marqGroups: {
                                schemas?: string[];
                                displayName?: string | null;
                                meta?: ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null) & ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null);
                                /** Format: uuid */
                                id?: string;
                                groupId?: string;
                                teams?: {
                                    id: string;
                                }[] | null;
                                members?: {
                                    id: string;
                                }[] | null;
                                /** Format: date-time */
                                createdAt?: string;
                                /** Format: date-time */
                                updatedAt?: string;
                                deletedAt?: string | null;
                            }[] | null;
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
        /** @description Get a team from within provision-service. */
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
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            followUpBossInstances: {
                                /** Format: uuid */
                                id: string;
                                name: string | null;
                                adminEmail: string | null;
                                instanceApiKey: string | null;
                                billingAccountId: string | null;
                                supportTier: number | null;
                                luxuryPresenceApiKey: string | null;
                                pixelWidgetTrackerCode: string | null;
                                websiteTrackerCustomerTag: string | null;
                                websiteTrackerLoaderCode: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                followUpBossUsers: {
                                    isOwner: boolean;
                                    name: string;
                                    firstName: string | null;
                                    lastName: string | null;
                                    email: string;
                                    leadEmailAddress: string;
                                    phone: string | null;
                                    role: string;
                                    status: string;
                                    timezone: string | null;
                                    lastSeenIos: string | null;
                                    lastSeenAndroid: string | null;
                                    lastSeenFub2: string | null;
                                    /** Format: uuid */
                                    id: string;
                                    followUpBossUserId: number;
                                    /** Format: date-time */
                                    followUpBossCreated: string;
                                    followUpBossUpdated: string | null;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                    assignedPeopleCount: number | null;
                                }[] | null;
                                lastReportId: string | null;
                                lastReport: {
                                    /** Format: uuid */
                                    id: string;
                                    releasedPhoneNumbers: {
                                        id: number;
                                        name: string;
                                        type: string;
                                        status: string;
                                        phone: string;
                                        locked: boolean;
                                        label: string | null;
                                        ported: boolean;
                                        email?: string;
                                    }[] | null;
                                    errors: {
                                        message: string;
                                        code?: string;
                                        statusCode?: number;
                                    }[] | null;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                } | null;
                            }[] | null;
                            activePipeOffices: {
                                /** Format: uuid */
                                id: string;
                                organisationalunitId: number;
                                name: string | null;
                                officename: string | null;
                                state: string | null;
                                city: string | null;
                                postcode: string | null;
                                region: string | null;
                                website: string | null;
                                licence: string | null;
                                logo: string | null;
                                fromdomains: string[];
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            }[] | null;
                            continuTeams: {
                                company: string;
                                name: string;
                                /** Format: uuid */
                                id: string;
                                continuId: string;
                                show_external: boolean | null;
                                level: number | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            }[] | null;
                            marqGroups: {
                                schemas?: string[];
                                displayName?: string | null;
                                meta?: ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null) & ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null);
                                /** Format: uuid */
                                id?: string;
                                groupId?: string;
                                teams?: {
                                    id: string;
                                }[] | null;
                                members?: {
                                    id: string;
                                }[] | null;
                                /** Format: date-time */
                                createdAt?: string;
                                /** Format: date-time */
                                updatedAt?: string;
                                deletedAt?: string | null;
                            }[] | null;
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
    "/teams/{teamId}/follow-up-boss-instances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get Follow Up Boss instances for a team */
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
                            name: string | null;
                            adminEmail: string | null;
                            instanceApiKey: string | null;
                            billingAccountId: string | null;
                            supportTier: number | null;
                            luxuryPresenceApiKey: string | null;
                            pixelWidgetTrackerCode: string | null;
                            websiteTrackerCustomerTag: string | null;
                            websiteTrackerLoaderCode: string | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            followUpBossUsers: {
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                /** Format: uuid */
                                id: string;
                                followUpBossUserId: number;
                                /** Format: date-time */
                                followUpBossCreated: string;
                                followUpBossUpdated: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                assignedPeopleCount: number | null;
                            }[] | null;
                            lastReportId: string | null;
                            lastReport: {
                                /** Format: uuid */
                                id: string;
                                releasedPhoneNumbers: {
                                    id: number;
                                    name: string;
                                    type: string;
                                    status: string;
                                    phone: string;
                                    locked: boolean;
                                    label: string | null;
                                    ported: boolean;
                                    email?: string;
                                }[] | null;
                                errors: {
                                    message: string;
                                    code?: string;
                                    statusCode?: number;
                                }[] | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            } | null;
                        }[];
                    };
                };
            };
        };
        put?: never;
        /** @description Add a Follow Up Boss instance to a team */
        post: {
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
                        /** @description Name of instance (to separate from other instances owned by the team). */
                        name?: string;
                        /**
                         * Format: email
                         * @description Email of admin user for managing Follow Up Boss
                         */
                        adminEmail?: string;
                        /** @description Billing account id for instance (from Follow Up Boss billing reports). Can only be set after we receive report with instance included. */
                        billingAccountId?: string;
                        /** @description API key for Follow Up Boss instance. */
                        instanceApiKey?: string;
                        /** @description Number indicating the tier of Follow Up Boss support. */
                        supportTier?: number;
                        /** @description API key for FUB instance which is to be used by Luxury Presence. */
                        luxuryPresenceApiKey?: string;
                        /** @description Deprecated. */
                        pixelWidgetTrackerCode?: string;
                        /** @description Tag for Follow Up Boss website tracker integration (a.k.a "Pixel Widget") */
                        websiteTrackerCustomerTag?: string;
                        /** @description Code for Follow Up Boss website tracker integration (a.k.a "Pixel Widget") */
                        websiteTrackerLoaderCode?: string;
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
                            name: string | null;
                            adminEmail: string | null;
                            instanceApiKey: string | null;
                            billingAccountId: string | null;
                            supportTier: number | null;
                            luxuryPresenceApiKey: string | null;
                            pixelWidgetTrackerCode: string | null;
                            websiteTrackerCustomerTag: string | null;
                            websiteTrackerLoaderCode: string | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            followUpBossUsers: {
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                /** Format: uuid */
                                id: string;
                                followUpBossUserId: number;
                                /** Format: date-time */
                                followUpBossCreated: string;
                                followUpBossUpdated: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                assignedPeopleCount: number | null;
                            }[] | null;
                            lastReportId: string | null;
                            lastReport: {
                                /** Format: uuid */
                                id: string;
                                releasedPhoneNumbers: {
                                    id: number;
                                    name: string;
                                    type: string;
                                    status: string;
                                    phone: string;
                                    locked: boolean;
                                    label: string | null;
                                    ported: boolean;
                                    email?: string;
                                }[] | null;
                                errors: {
                                    message: string;
                                    code?: string;
                                    statusCode?: number;
                                }[] | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            } | null;
                        };
                    };
                };
            };
        };
        /** @description Delete all Follow Up Boss instances for a team */
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
                            name: string | null;
                            adminEmail: string | null;
                            instanceApiKey: string | null;
                            billingAccountId: string | null;
                            supportTier: number | null;
                            luxuryPresenceApiKey: string | null;
                            pixelWidgetTrackerCode: string | null;
                            websiteTrackerCustomerTag: string | null;
                            websiteTrackerLoaderCode: string | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            followUpBossUsers: {
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                /** Format: uuid */
                                id: string;
                                followUpBossUserId: number;
                                /** Format: date-time */
                                followUpBossCreated: string;
                                followUpBossUpdated: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                assignedPeopleCount: number | null;
                            }[] | null;
                            lastReportId: string | null;
                            lastReport: {
                                /** Format: uuid */
                                id: string;
                                releasedPhoneNumbers: {
                                    id: number;
                                    name: string;
                                    type: string;
                                    status: string;
                                    phone: string;
                                    locked: boolean;
                                    label: string | null;
                                    ported: boolean;
                                    email?: string;
                                }[] | null;
                                errors: {
                                    message: string;
                                    code?: string;
                                    statusCode?: number;
                                }[] | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            } | null;
                        }[];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/teams/{teamId}/follow-up-boss-instances/{instanceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a Follow Up Boss instance for a team */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                    instanceId: string;
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
                            name: string | null;
                            adminEmail: string | null;
                            instanceApiKey: string | null;
                            billingAccountId: string | null;
                            supportTier: number | null;
                            luxuryPresenceApiKey: string | null;
                            pixelWidgetTrackerCode: string | null;
                            websiteTrackerCustomerTag: string | null;
                            websiteTrackerLoaderCode: string | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            followUpBossUsers: {
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                /** Format: uuid */
                                id: string;
                                followUpBossUserId: number;
                                /** Format: date-time */
                                followUpBossCreated: string;
                                followUpBossUpdated: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                assignedPeopleCount: number | null;
                            }[] | null;
                            lastReportId: string | null;
                            lastReport: {
                                /** Format: uuid */
                                id: string;
                                releasedPhoneNumbers: {
                                    id: number;
                                    name: string;
                                    type: string;
                                    status: string;
                                    phone: string;
                                    locked: boolean;
                                    label: string | null;
                                    ported: boolean;
                                    email?: string;
                                }[] | null;
                                errors: {
                                    message: string;
                                    code?: string;
                                    statusCode?: number;
                                }[] | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            } | null;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** @description Delete a Follow Up Boss instance for a team */
        delete: {
            parameters: {
                query?: {
                    skipDeleteEmail?: boolean;
                };
                header?: never;
                path: {
                    teamId: string;
                    instanceId: string;
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
                            name: string | null;
                            adminEmail: string | null;
                            instanceApiKey: string | null;
                            billingAccountId: string | null;
                            supportTier: number | null;
                            luxuryPresenceApiKey: string | null;
                            pixelWidgetTrackerCode: string | null;
                            websiteTrackerCustomerTag: string | null;
                            websiteTrackerLoaderCode: string | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            followUpBossUsers: {
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                /** Format: uuid */
                                id: string;
                                followUpBossUserId: number;
                                /** Format: date-time */
                                followUpBossCreated: string;
                                followUpBossUpdated: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                assignedPeopleCount: number | null;
                            }[] | null;
                            lastReportId: string | null;
                            lastReport: {
                                /** Format: uuid */
                                id: string;
                                releasedPhoneNumbers: {
                                    id: number;
                                    name: string;
                                    type: string;
                                    status: string;
                                    phone: string;
                                    locked: boolean;
                                    label: string | null;
                                    ported: boolean;
                                    email?: string;
                                }[] | null;
                                errors: {
                                    message: string;
                                    code?: string;
                                    statusCode?: number;
                                }[] | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            } | null;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /** @description Update a Follow Up Boss instance for a team */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                    instanceId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string | null;
                        adminEmail?: string | null;
                        billingAccountId?: string | null;
                        instanceApiKey?: string | null;
                        supportTier?: number | null;
                        luxuryPresenceApiKey?: string | null;
                        pixelWidgetTrackerCode?: string | null;
                        websiteTrackerCustomerTag?: string | null;
                        websiteTrackerLoaderCode?: string | null;
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
                            name: string | null;
                            adminEmail: string | null;
                            instanceApiKey: string | null;
                            billingAccountId: string | null;
                            supportTier: number | null;
                            luxuryPresenceApiKey: string | null;
                            pixelWidgetTrackerCode: string | null;
                            websiteTrackerCustomerTag: string | null;
                            websiteTrackerLoaderCode: string | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            followUpBossUsers: {
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                /** Format: uuid */
                                id: string;
                                followUpBossUserId: number;
                                /** Format: date-time */
                                followUpBossCreated: string;
                                followUpBossUpdated: string | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                assignedPeopleCount: number | null;
                            }[] | null;
                            lastReportId: string | null;
                            lastReport: {
                                /** Format: uuid */
                                id: string;
                                releasedPhoneNumbers: {
                                    id: number;
                                    name: string;
                                    type: string;
                                    status: string;
                                    phone: string;
                                    locked: boolean;
                                    label: string | null;
                                    ported: boolean;
                                    email?: string;
                                }[] | null;
                                errors: {
                                    message: string;
                                    code?: string;
                                    statusCode?: number;
                                }[] | null;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            } | null;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/teams/{teamId}/follow-up-boss-instances/reclaim-phone-numbers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Reclaim all released phone numbers for all of a team's Follow Up Boss instances. After manually removing an account through the FUB UI, assigned phone numbers are marked as {number (Released)}.
         *             To use this phone number again it must be reassigned. Use this endpoint to reassign phone numbers that are in a released state,
         *             back too the team phone numbers queue. */
        post: {
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
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            success: {
                                phoneNumber: string;
                                result: {
                                    success: boolean;
                                    provisioned: boolean;
                                };
                            }[];
                            errors: {
                                phoneNumber: string;
                                error: unknown;
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
    "/teams/{teamId}/activepipe/offices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get the Activepipe offices associated with a team */
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
                            organisationalunitId: number;
                            name: string | null;
                            officename: string | null;
                            state: string | null;
                            city: string | null;
                            postcode: string | null;
                            region: string | null;
                            website: string | null;
                            licence: string | null;
                            logo: string | null;
                            fromdomains: string[];
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
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
        /** @description Associate ActivePipe offices to a team */
        patch: {
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
                        officeIds: string[];
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
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            activePipeOffices: {
                                /** Format: uuid */
                                id: string;
                                organisationalunitId: number;
                                name: string | null;
                                officename: string | null;
                                state: string | null;
                                city: string | null;
                                postcode: string | null;
                                region: string | null;
                                website: string | null;
                                licence: string | null;
                                logo: string | null;
                                fromdomains: string[];
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            }[] | null;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/teams/{teamId}/activepipe/offices/{officeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get Activepipe office */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                    officeId: string;
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
                            office: {
                                /** Format: uuid */
                                id: string;
                                organisationalunitId: number;
                                name: string | null;
                                officename: string | null;
                                state: string | null;
                                city: string | null;
                                postcode: string | null;
                                region: string | null;
                                website: string | null;
                                licence: string | null;
                                logo: string | null;
                                fromdomains: string[];
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                                users: {
                                    email: string;
                                    displayname: string | null;
                                    firstname: string | null;
                                    lastname: string | null;
                                    website: string | null;
                                    primaryphone: string | null;
                                    licence: string | null;
                                    status: string;
                                    timezone: string | null;
                                    /** Format: uuid */
                                    id: string;
                                    activePipeUserId: number;
                                    organisationalunitId: number;
                                    suspendedAt: string | null;
                                    firstactiveAt: string | null;
                                    isInvitePending: boolean;
                                    integrationName: string | null;
                                    integrations: {
                                        id: string;
                                        organisationalunitId: number;
                                        integrationUserId: string | null;
                                        lastsyncedAt: string | null;
                                        /** Format: date-time */
                                        activePipeCreatedAt: string;
                                        /** Format: date-time */
                                        activePipeModifiedAt: string;
                                        /** Format: date-time */
                                        createdAt: string;
                                        /** Format: date-time */
                                        updatedAt: string;
                                        deletedAt: string | null;
                                    }[];
                                    lastLogin: string | null;
                                    activePipeCreatedAt: string | null;
                                    activePipeModifiedAt: string | null;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                }[] | null;
                                integrations: {
                                    host: string | null;
                                    integrationtype: string | null;
                                    timezone: string;
                                    title: string | null;
                                    notes: string | null;
                                    disclaimer: string | null;
                                    apikey: string | null;
                                    username: string | null;
                                    password: string | null;
                                    customparameters: string | null;
                                    migration: boolean;
                                    linkable: boolean;
                                    /** Format: uuid */
                                    id: string;
                                    providerId: number;
                                    clientId: number | null;
                                    syncStatus: string | null;
                                    lastError: string | null;
                                    lastsyncedAt: string | null;
                                    lastconsumedAt: string | null;
                                    modifiedAt: string | null;
                                    modifiedBy: number | null;
                                    activePipeId: number;
                                    oauthRefreshtoken: string | null;
                                    oauthAccesstoken: string | null;
                                    clientIdOriginal: string | null;
                                    passwordOriginal: string | null;
                                    apikeyOriginal: string | null;
                                    accessTokenExpiresAt: string | null;
                                    activePipeOfficeId: string | null;
                                    /** Format: date-time */
                                    activePipeCreatedAt: string;
                                    activePipeCreatedBy: number;
                                    activePipeDeletedBy: number | null;
                                    activePipeDeletedAt: string | null;
                                    /** Format: date-time */
                                    createdAt: string;
                                    /** Format: date-time */
                                    updatedAt: string;
                                    deletedAt: string | null;
                                }[] | null;
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
    "/teams/{teamId}/marq-groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get Marq groups associated with a team */
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
                            schemas: string[];
                            displayName: string | null;
                            meta: ({
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null) & ({
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null);
                            /** Format: uuid */
                            id: string;
                            groupId: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                        }[];
                    };
                };
            };
        };
        put?: never;
        /** @description Add Marq Groups to team */
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
                        groupIds: string[];
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
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            marqGroups: {
                                schemas?: string[];
                                displayName?: string | null;
                                meta?: ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null) & ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null);
                                /** Format: uuid */
                                id?: string;
                                groupId?: string;
                                teams?: {
                                    id: string;
                                }[] | null;
                                members?: {
                                    id: string;
                                }[] | null;
                                /** Format: date-time */
                                createdAt?: string;
                                /** Format: date-time */
                                updatedAt?: string;
                                deletedAt?: string | null;
                            }[] | null;
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
    "/teams/{teamId}/marq-groups/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get Marq group members */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                    groupId: string;
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
                            schemas: string[];
                            displayName: string | null;
                            meta: ({
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null) & ({
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null);
                            /** Format: uuid */
                            id: string;
                            groupId: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
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
    "/teams/{teamId}/marq-groups/{groupId}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get Marq group members */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                    groupId: string;
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
                            schemas: string[] | null;
                            userName: string | null;
                            name: {
                                formatted: string;
                                givenName: string;
                                familyName: string;
                            } | null;
                            displayName: string | null;
                            emails: {
                                value: string;
                                primary: boolean;
                            }[] | null;
                            active: boolean;
                            meta: {
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null;
                            roles: string[] | null;
                            "urn:ietf:params:scim:schemas:extension:lucidpress:1.0:UserFields"?: {
                                disclaimer: string | null;
                                officeAddress: string | null;
                                managingBrokerName: string | null;
                                managingBrokerPhone: string | null;
                                managingBrokerEmail: string | null;
                                licenseType: string | null;
                                agentLicenseNumber: string | null;
                                jurisdiction: string | null;
                                corporateLicenseNumber: string | null;
                                dbaLlcDisclaimer: string | null;
                                prospectDisclaimer: string | null;
                            } | null;
                            /** Format: uuid */
                            id: string;
                            marqId: string;
                            identityUser: {
                                id: string;
                            } | null;
                            scimSchemaLucidchartV1User: {
                                canEdit: boolean;
                                addOns: string[];
                            } | null;
                            scimSchemaExtensionLucidV2User: {
                                billingCode: string | null;
                                userIdAtPrintVendor: string | null;
                                officeIdAtPrintVendor: string | null;
                                productLicenses: {
                                    Lucidpress?: boolean | null;
                                    Marq?: boolean | null;
                                } | null;
                            } | null;
                            billingAdmin: boolean;
                            teamAdmin: boolean;
                            templateAdmin: boolean;
                            printApprover: boolean;
                            documentApprover: boolean;
                            analyticsUser: boolean;
                            dataAdmin: boolean;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
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
    "/teams/{teamId}/marq-groups/{groupId}/members/{memberId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get Marq group members */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    teamId: string;
                    groupId: string;
                    memberId: string;
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
                            schemas: string[] | null;
                            userName: string | null;
                            name: {
                                formatted: string;
                                givenName: string;
                                familyName: string;
                            } | null;
                            displayName: string | null;
                            emails: {
                                value: string;
                                primary: boolean;
                            }[] | null;
                            active: boolean;
                            meta: {
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null;
                            roles: string[] | null;
                            "urn:ietf:params:scim:schemas:extension:lucidpress:1.0:UserFields"?: {
                                disclaimer: string | null;
                                officeAddress: string | null;
                                managingBrokerName: string | null;
                                managingBrokerPhone: string | null;
                                managingBrokerEmail: string | null;
                                licenseType: string | null;
                                agentLicenseNumber: string | null;
                                jurisdiction: string | null;
                                corporateLicenseNumber: string | null;
                                dbaLlcDisclaimer: string | null;
                                prospectDisclaimer: string | null;
                            } | null;
                            /** Format: uuid */
                            id: string;
                            marqId: string;
                            identityUser: {
                                id: string;
                            } | null;
                            scimSchemaLucidchartV1User: {
                                canEdit: boolean;
                                addOns: string[];
                            } | null;
                            scimSchemaExtensionLucidV2User: {
                                billingCode: string | null;
                                userIdAtPrintVendor: string | null;
                                officeIdAtPrintVendor: string | null;
                                productLicenses: {
                                    Lucidpress?: boolean | null;
                                    Marq?: boolean | null;
                                } | null;
                            } | null;
                            billingAdmin: boolean;
                            teamAdmin: boolean;
                            templateAdmin: boolean;
                            printApprover: boolean;
                            documentApprover: boolean;
                            analyticsUser: boolean;
                            dataAdmin: boolean;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
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
    "/reports/follow-up-boss-instance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Create a report for a single Follow Up Boss instance including number of users and matching with identity team members. */
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
                        /** Format: uuid */
                        teamId: string;
                        /** Format: uuid */
                        instanceId?: string;
                        includeDeleted?: boolean;
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
                            id: string | null;
                            counts: {
                                activeUsers: number;
                                totalUsers: number;
                                deletedUsers: number;
                                inactiveUsers: number;
                                unacceptedInvites: number;
                                unmatchedIdentityUsers: number;
                                agents: number;
                                brokers: number;
                                phoneNumbers: number | null;
                                releasedPhoneNumbers: number | null;
                            };
                            activeUsers: {
                                id: number;
                                created: string;
                                updated: string;
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                beta: boolean;
                                picture: {
                                    "26x26": string;
                                    "30x30": string;
                                    "40x40": string;
                                    "60x60": string;
                                    "162x162": string;
                                    original: string;
                                } | unknown[];
                                pauseLeadDistribution: boolean;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                canExport: boolean;
                                canCreateApiKeys: boolean;
                                groups: {
                                    id: number;
                                    name: string;
                                }[];
                                teamIds?: number[];
                                teamLeaderOf?: number[];
                            }[];
                            inactiveUsers: {
                                id: number;
                                created: string;
                                updated: string;
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                beta: boolean;
                                picture: {
                                    "26x26": string;
                                    "30x30": string;
                                    "40x40": string;
                                    "60x60": string;
                                    "162x162": string;
                                    original: string;
                                } | unknown[];
                                pauseLeadDistribution: boolean;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                canExport: boolean;
                                canCreateApiKeys: boolean;
                                groups: {
                                    id: number;
                                    name: string;
                                }[];
                                teamIds?: number[];
                                teamLeaderOf?: number[];
                            }[];
                            unacceptedInvites: {
                                id: number;
                                created: string;
                                updated: string;
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                beta: boolean;
                                picture: {
                                    "26x26": string;
                                    "30x30": string;
                                    "40x40": string;
                                    "60x60": string;
                                    "162x162": string;
                                    original: string;
                                } | unknown[];
                                pauseLeadDistribution: boolean;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                canExport: boolean;
                                canCreateApiKeys: boolean;
                                groups: {
                                    id: number;
                                    name: string;
                                }[];
                                teamIds?: number[];
                                teamLeaderOf?: number[];
                            }[];
                            unconfirmedIdentityUsers: {
                                id: number;
                                created: string;
                                updated: string;
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                beta: boolean;
                                picture: {
                                    "26x26": string;
                                    "30x30": string;
                                    "40x40": string;
                                    "60x60": string;
                                    "162x162": string;
                                    original: string;
                                } | unknown[];
                                pauseLeadDistribution: boolean;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                canExport: boolean;
                                canCreateApiKeys: boolean;
                                groups: {
                                    id: number;
                                    name: string;
                                }[];
                                teamIds?: number[];
                                teamLeaderOf?: number[];
                            }[];
                            confirmedIdentityUsers: {
                                /** Format: uuid */
                                id: string;
                                teamId: string | null;
                                followUpBossId: number;
                            }[];
                            releasedPhoneNumbers: {
                                id: number;
                                name: string;
                                type: string;
                                status: string;
                                phone: string;
                                locked: boolean;
                                label: string | null;
                                ported: boolean;
                                email?: string;
                            }[] | null;
                            deletedUsers: {
                                id: number;
                                created: string;
                                updated: string;
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                beta: boolean;
                                picture: {
                                    "26x26": string;
                                    "30x30": string;
                                    "40x40": string;
                                    "60x60": string;
                                    "162x162": string;
                                    original: string;
                                } | unknown[];
                                pauseLeadDistribution: boolean;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                canExport: boolean;
                                canCreateApiKeys: boolean;
                                groups: {
                                    id: number;
                                    name: string;
                                }[];
                                teamIds?: number[];
                                teamLeaderOf?: number[];
                            }[];
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
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
                            error: {
                                code: string;
                                message: string;
                            };
                            type: string;
                            details?: {
                                status?: number;
                            };
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
    "/reports/follow-up-boss": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Create a report for all Follow Up Boss instances including number of users and matching with identity team members. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        teamIds?: string[];
                        /** @description Whether or not to sort teams by last reported ascending (i.e. team which has not had a report in the longest time first) */
                        mostRecentReportAsc?: boolean;
                        /** @description Limit number of teams to report on (not applied if teamIds provided). */
                        limit?: number;
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
                            id: string | null;
                            counts: {
                                activeUsers: number;
                                totalUsers: number;
                                deletedUsers: number;
                                inactiveUsers: number;
                                unacceptedInvites: number;
                                unmatchedIdentityUsers: number;
                                agents: number;
                                brokers: number;
                                phoneNumbers: number | null;
                                releasedPhoneNumbers: number | null;
                            } & {
                                activeUsers: number;
                                totalUsers: number;
                                deletedUsers: number;
                                inactiveUsers: number;
                                unacceptedInvites: number;
                                unmatchedIdentityUsers: number;
                                agents: number;
                                brokers: number;
                                phoneNumbers: number | null;
                                releasedPhoneNumbers: number | null;
                                teams: number;
                                instances: number;
                            };
                            inactiveUsers: {
                                id: number;
                                created: string;
                                updated: string;
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                beta: boolean;
                                picture: {
                                    "26x26": string;
                                    "30x30": string;
                                    "40x40": string;
                                    "60x60": string;
                                    "162x162": string;
                                    original: string;
                                } | unknown[];
                                pauseLeadDistribution: boolean;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                canExport: boolean;
                                canCreateApiKeys: boolean;
                                groups: {
                                    id: number;
                                    name: string;
                                }[];
                                teamIds?: number[];
                                teamLeaderOf?: number[];
                            }[];
                            unacceptedInvites: {
                                id: number;
                                created: string;
                                updated: string;
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                beta: boolean;
                                picture: {
                                    "26x26": string;
                                    "30x30": string;
                                    "40x40": string;
                                    "60x60": string;
                                    "162x162": string;
                                    original: string;
                                } | unknown[];
                                pauseLeadDistribution: boolean;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                canExport: boolean;
                                canCreateApiKeys: boolean;
                                groups: {
                                    id: number;
                                    name: string;
                                }[];
                                teamIds?: number[];
                                teamLeaderOf?: number[];
                            }[];
                            unconfirmedIdentityUsers: {
                                id: number;
                                created: string;
                                updated: string;
                                isOwner: boolean;
                                name: string;
                                firstName: string | null;
                                lastName: string | null;
                                email: string;
                                leadEmailAddress: string;
                                phone: string | null;
                                role: string;
                                status: string;
                                timezone: string | null;
                                beta: boolean;
                                picture: {
                                    "26x26": string;
                                    "30x30": string;
                                    "40x40": string;
                                    "60x60": string;
                                    "162x162": string;
                                    original: string;
                                } | unknown[];
                                pauseLeadDistribution: boolean;
                                lastSeenIos: string | null;
                                lastSeenAndroid: string | null;
                                lastSeenFub2: string | null;
                                canExport: boolean;
                                canCreateApiKeys: boolean;
                                groups: {
                                    id: number;
                                    name: string;
                                }[];
                                teamIds?: number[];
                                teamLeaderOf?: number[];
                            }[];
                            releasedPhoneNumbers: {
                                id: number;
                                name: string;
                                type: string;
                                status: string;
                                phone: string;
                                locked: boolean;
                                label: string | null;
                                ported: boolean;
                                email?: string;
                            }[] | null;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                            erroredReports: {
                                /** Format: uuid */
                                teamId: string;
                                reason?: string;
                            }[] | null;
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
    "/marq/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Sync Marq data to provision DB. */
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
                            usersCreated: number;
                            groupsCreated: number;
                            memberConnections: number;
                            missingMembers: {
                                id: string;
                                email: string;
                            }[];
                            identityMapNoPrimaryContact: {
                                id: string;
                            }[];
                            identityMapErrors: {
                                id: string;
                                marq: {
                                    id: string;
                                };
                                error: string;
                            }[];
                            identityUsersCount: number;
                            /** Format: date-time */
                            lastSynced: string;
                            duration: number;
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
    "/marq/sync-smart-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Sync users smart field data */
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
                            usersUpdated: number;
                            usersNotFound: {
                                userId: string;
                                teamId: string;
                            }[];
                            userErrors: {
                                userId: string;
                                teamId: string;
                                license?: {
                                    id: string | null;
                                    number: string | null;
                                    expiration: string | null;
                                    state: string | null;
                                };
                            }[];
                            /** Format: date-time */
                            lastSynced: string;
                            duration: number;
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
    "/marq/sync-group/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * @deprecated
         * @description DEPRECATED: Use POST /marq/sync-group instead
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    groupId: string;
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
                            status: string;
                            duration: string;
                            groupId: string;
                            members: number;
                            group: {
                                schemas: string[];
                                displayName: string | null;
                                meta: ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null) & ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null);
                                /** Format: uuid */
                                id: string;
                                groupId: string;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            };
                            teams: {
                                id: string;
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
    "/marq/groups/unassigned": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Return Marq groups that do not have team associations */
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
                            schemas: string[];
                            displayName: string | null;
                            meta: ({
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null) & ({
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null);
                            /** Format: uuid */
                            id: string;
                            groupId: string;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
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
    "/marq/sync-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sync a Marq group to provision DB */
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
                        groupId: string;
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
                            status: string;
                            duration: string;
                            groupId: string;
                            members: number;
                            group: {
                                schemas: string[];
                                displayName: string | null;
                                meta: ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null) & ({
                                    resourceType: string | null;
                                    created: string | null;
                                    lastModified: string | null;
                                    version: string | null;
                                    location: string | null;
                                } | null);
                                /** Format: uuid */
                                id: string;
                                groupId: string;
                                /** Format: date-time */
                                createdAt: string;
                                /** Format: date-time */
                                updatedAt: string;
                                deletedAt: string | null;
                            };
                            teams: {
                                id: string;
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
    "/marq/sync-teams": {
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
        /** @description Sync Marq groups with teams */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": string;
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
                            groupsSynced: number;
                            /** Format: date-time */
                            lastSynced: string;
                            duration: number;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/marq/users/{userId}/roles": {
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
        /** @description Update marq user roles */
        patch: {
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
                            schemas: string[] | null;
                            userName: string | null;
                            name: {
                                formatted: string;
                                givenName: string;
                                familyName: string;
                            } | null;
                            displayName: string | null;
                            emails: {
                                value: string;
                                primary: boolean;
                            }[] | null;
                            active: boolean;
                            meta: {
                                resourceType: string | null;
                                created: string | null;
                                lastModified: string | null;
                                version: string | null;
                                location: string | null;
                            } | null;
                            roles: string[] | null;
                            "urn:ietf:params:scim:schemas:extension:lucidpress:1.0:UserFields"?: {
                                disclaimer: string | null;
                                officeAddress: string | null;
                                managingBrokerName: string | null;
                                managingBrokerPhone: string | null;
                                managingBrokerEmail: string | null;
                                licenseType: string | null;
                                agentLicenseNumber: string | null;
                                jurisdiction: string | null;
                                corporateLicenseNumber: string | null;
                                dbaLlcDisclaimer: string | null;
                                prospectDisclaimer: string | null;
                            } | null;
                            /** Format: uuid */
                            id: string;
                            marqId: string;
                            identityUser: {
                                id: string;
                            } | null;
                            groups: {
                                id: string;
                            }[] | null;
                            scimSchemaLucidchartV1User: {
                                canEdit: boolean;
                                addOns: string[];
                            } | null;
                            scimSchemaExtensionLucidV2User: {
                                billingCode: string | null;
                                userIdAtPrintVendor: string | null;
                                officeIdAtPrintVendor: string | null;
                                productLicenses: {
                                    Lucidpress?: boolean | null;
                                    Marq?: boolean | null;
                                } | null;
                            } | null;
                            billingAdmin: boolean;
                            teamAdmin: boolean;
                            templateAdmin: boolean;
                            printApprover: boolean;
                            documentApprover: boolean;
                            analyticsUser: boolean;
                            dataAdmin: boolean;
                            /** Format: date-time */
                            createdAt: string;
                            /** Format: date-time */
                            updatedAt: string;
                            deletedAt: string | null;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/workvivo/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Adds or removes the user from Workvivo. If the user is added, it will update all state- and role-team memberships and create a Workvivo company-type (based on the user's oldest active team membership's root team) team if one doesn't already exist. [See docs](https://residenetwork.atlassian.net/wiki/spaces/PLAT/pages/3649929218/Workvivo#User-Provisioning) for more details. */
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
                        /** Format: uuid */
                        userId: string;
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
                            /** @enum {string} */
                            status: "PROVISIONED" | "DEPROVISIONED" | "SKIPPED";
                            /** Format: uuid */
                            userId: string;
                            name: string;
                            teams: {
                                company: string | null;
                                roles: string[];
                                states: string[];
                                actions: {
                                    id: number;
                                    /** @enum {string} */
                                    action: "MEMBERSHIP_ADDED" | "MEMBERSHIP_REMOVED" | "COMPANY_CREATED";
                                    name: string;
                                }[];
                            };
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
                            /** @enum {string} */
                            status: "PROVISIONED" | "DEPROVISIONED" | "SKIPPED";
                            /** Format: uuid */
                            userId: string;
                            name: string;
                            teams: {
                                company: string | null;
                                roles: string[];
                                states: string[];
                                actions: {
                                    id: number;
                                    /** @enum {string} */
                                    action: "MEMBERSHIP_ADDED" | "MEMBERSHIP_REMOVED" | "COMPANY_CREATED";
                                    name: string;
                                }[];
                            };
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
