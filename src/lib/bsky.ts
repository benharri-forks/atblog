import { CredentialManager, XRPC } from "@atcute/client";

export const MY_DID = "did:plc:v7tbr6qxk6xanxzn6hjmbk7o";
export const MY_PDS = "https://hellthread.pro";

const handler = new CredentialManager({ service: MY_PDS, fetch });
export const bsky = new XRPC({ handler });
