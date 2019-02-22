export enum ConsumerStatus {
  /* Success states */
  READY = "ready",
  REJECTED = "rejected",

  /* Pending states */
  PENDING_DOCUMENTS = "pending_documents",
  PENDING_SELFIE = "pending_selfie",
  PENDING_DELETION = "pending_deletion",

  /* Processing states */
  PROCESSING_DOCUMENTS = "processing_documents",
  PROCESSING_WALLETS = "processing_wallets",

  /* Error states */
  PROVIDER_FAILED = "provider_failed",
  INVALID_DOCUMENTS = "invalid_documents",
  MANUAL_VERIFICATION = "manual_verification",

  /* Blocked state */
  SUSPENDED = "suspended",
  BLOCKED = "blocked",
  DELETED = "deleted"
}
