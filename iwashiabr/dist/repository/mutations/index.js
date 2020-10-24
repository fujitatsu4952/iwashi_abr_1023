"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.FetchS3ObjectsDocument = exports.AddS3ObjectDocument = exports.UpdateS3ObjectDocument = exports.FetchRoomMastsDocument = exports.AddRoomMastDocument = exports.UpdateRoomMastDocument = exports.FetchPolicyMastDocument = exports.AddPolicyMastDocument = exports.UpdatePolicyMastDocument = exports.FetchPlanMastsDocument = exports.AddPlanMastDocument = exports.UpdatePlanMastDocument = void 0;
const graphql_1 = require("graphql");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.UpdatePlanMastDocument = graphql_tag_1.default `
    mutation updatePlanMast($planMast: PlanMastInput) {
  updatePlanMast(input: $planMast) {
    name
  }
}
    `;
exports.AddPlanMastDocument = graphql_tag_1.default `
    mutation addPlanMast($planMast: PlanMastInput) {
  addPlanMast(input: $planMast) {
    planID
    name
    description
    subDescription
    price
    stockNum
    deletedAt
    inSale
  }
}
    `;
exports.FetchPlanMastsDocument = graphql_tag_1.default `
    query fetchPlanMasts($planID: ID) {
  fetchPlanMasts(planID: $planID) {
    planID
    name
    description
    subDescription
    price
    stockNum
    deletedAt
    inSale
  }
}
    `;
exports.UpdatePolicyMastDocument = graphql_tag_1.default `
    mutation updatePolicyMast($policyMast: PolicyMastInput) {
  updatePolicyMast(input: $policyMast) {
    policyID
  }
}
    `;
exports.AddPolicyMastDocument = graphql_tag_1.default `
    mutation addPolicyMast($policyMast: PolicyMastInput) {
  addPolicyMast(input: $policyMast) {
    policyID
  }
}
    `;
exports.FetchPolicyMastDocument = graphql_tag_1.default `
    query fetchPolicyMast($policyID: ID) {
  fetchPolicyMast(policyID: $policyID) {
    policyID
    roomChargePrice
  }
}
    `;
exports.UpdateRoomMastDocument = graphql_tag_1.default `
    mutation updateRoomMast($roomMast: RoomMastInput) {
  updateRoomMast(input: $roomMast) {
    name
  }
}
    `;
exports.AddRoomMastDocument = graphql_tag_1.default `
    mutation addRoomMast($roomMast: RoomMastInput) {
  addRoomMast(input: $roomMast) {
    name
  }
}
    `;
exports.FetchRoomMastsDocument = graphql_tag_1.default `
    query fetchRoomMasts($roomID: ID) {
  fetchRoomMasts(roomID: $roomID) {
    roomID
    name
    description
    subDescription
    maxPeopleNum
    stockNum
    minOrderNum
    deletedAt
    inSale
  }
}
    `;
exports.UpdateS3ObjectDocument = graphql_tag_1.default `
    mutation updateS3Object($s3Object: S3ObjectInput) {
  updateS3Object(input: $s3Object) {
    bucket
  }
}
    `;
exports.AddS3ObjectDocument = graphql_tag_1.default `
    mutation addS3Object($s3Object: S3ObjectInput) {
  addS3Object(input: $s3Object) {
    bucket
    keyName
    region
    mimeType
    fileName
  }
}
    `;
exports.FetchS3ObjectsDocument = graphql_tag_1.default `
    query fetchS3Objects($keyName: String) {
  fetchS3Objects(keyName: $keyName) {
    bucket
    keyName
    region
    mimeType
    fileName
  }
}
    `;
const defaultWrapper = sdkFunction => sdkFunction();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        updatePlanMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdatePlanMastDocument), variables));
        },
        addPlanMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddPlanMastDocument), variables));
        },
        fetchPlanMasts(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchPlanMastsDocument), variables));
        },
        updatePolicyMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdatePolicyMastDocument), variables));
        },
        addPolicyMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddPolicyMastDocument), variables));
        },
        fetchPolicyMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchPolicyMastDocument), variables));
        },
        updateRoomMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdateRoomMastDocument), variables));
        },
        addRoomMast(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddRoomMastDocument), variables));
        },
        fetchRoomMasts(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchRoomMastsDocument), variables));
        },
        updateS3Object(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.UpdateS3ObjectDocument), variables));
        },
        addS3Object(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.AddS3ObjectDocument), variables));
        },
        fetchS3Objects(variables) {
            return withWrapper(() => client.rawRequest(graphql_1.print(exports.FetchS3ObjectsDocument), variables));
        }
    };
}
exports.getSdk = getSdk;
