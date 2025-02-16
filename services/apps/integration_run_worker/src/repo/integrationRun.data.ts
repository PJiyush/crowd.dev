import { IntegrationRunState, IntegrationState } from '@crowd/types'

export interface IGenerateStreamsData {
  onboarding: boolean
  integrationId: string
  integrationType: string
  integrationState: IntegrationState
  integrationIdentifier: string | null
  runState: IntegrationRunState
  runId: string
  tenantId: string
  hasSampleData: boolean
  integrationSettings: unknown
  streamCount: number
}

export interface IStartIntegrationRunData {
  id: string
  type: string
  state: IntegrationState
  identifier: string | null
  tenantId: string
}

export interface IPendingDelayedRun {
  id: string
  tenantId: string
  integrationType: string
}
