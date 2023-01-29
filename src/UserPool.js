/* eslint-disable import/no-anonymous-default-export */
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_h1TdNbJpL",
  ClientId: "5kfrn9rottnfgpt268qqlltjmi",
};

export default new CognitoUserPool(poolData);
