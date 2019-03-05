export enum TransactionStatus {
  /* Transaction flow states */
  PENDING = "pending",
  AUTHORIZED = "AUTHORIZED",
  EXECUTED = "executed",
  NOTIFIED = "notified",

  /* Error states */
  FAILED = "failed"
}
