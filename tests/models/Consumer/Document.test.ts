import * as faker from "faker";
import * as uuid from "uuid/v4";
import { Document, DocumentSchema, DocumentType, DocumentStatus } from "../../../lib";

export const TEST_DOCUMENT = (type: DocumentType = DocumentType.BRL_IDENTITY): DocumentSchema => ({
  type,
  id: uuid(),
  number: faker.random.alphaNumeric(12),
  status: DocumentStatus.PROCESSING,
  back: Buffer.from(uuid()).toString("base64"),
  front: Buffer.from(uuid()).toString("base64"),
  selfie: Buffer.from(uuid()).toString("base64")
});

describe("lib.models.Consumer.Document", () => {
  it("should instantiate a valid instance", async () => {
    const schema = TEST_DOCUMENT();
    const document = new Document(schema);

    expect(document.id).toBe(schema.id);
    expect(document.type).toBe(schema.type);
    expect(document.number).toBe(schema.number);
    expect(document.front).toBe(schema.front);
    expect(document.back).toBe(schema.back);
    expect(document.selfie).toBe(schema.selfie);

    expect(await document.isValid()).toBe(true);
  });
});