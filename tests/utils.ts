import { ExecutionResult, graphql } from 'graphql';
import { getSchema } from '../src/services/ApolloServices/ApolloServerService';

async function testGraphQLQuery<T>(query: string, variables?: Record<string, any>) {
    const schema = await getSchema();

    return graphql({
        schema,
        source: query,
        variableValues: variables,
    }) as unknown as Promise<ExecutionResult<T>>;
}

export { testGraphQLQuery };
