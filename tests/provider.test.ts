import { Verifier } from '@pact-foundation/pact'

describe('Pact Verification', () => {
    it('verifies the provider', async () => {
        const options = {
            provider: 'Service-B',
            providerBaseUrl: 'http://localhost:4321',
            disableSSLVerification: true,
            pactBroker: 'http://127.0.0.1:9292',
            pactUrls: [
                'http://127.0.0.1:9292/pacts/provider/Service-B/consumer/Service-A/latest'
            ],
        }
        return await new Verifier(options).verifyProvider()
    })
})