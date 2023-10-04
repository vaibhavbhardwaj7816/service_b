import {Verifier} from '@pact-foundation/pact'
import * as path from 'path'

describe('Pact Verification', () => {
    it('verifies the provider', () => {
        const options = {
            provider: 'Service-B',
            providerBaseUrl: 'http://localhost:4321',
            disableSSLVerification: true,
            pactBroker: 'http://127.0.0.1:9292',
            pactUrls: [
                'http://127.0.0.1:9292/pacts/provider/Service-B/consumer/Service-A/latest'
                //   path.resolve(
                //     process.cwd(),
                //     'tests',
                //     'pacts',
                //     'web_server-api_server.json'
                //   ),
            ],
        }
        return new Verifier(options)
            .verifyProvider()
            .then((output: any) => {
                console.log('Pact Verification Complete!')
                console.log('Result:', output)
            })
            .catch((error: any) => {
                console.error(error)
            })
    })
})