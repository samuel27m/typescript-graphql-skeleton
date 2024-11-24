import { ExecutionResult, graphql } from 'graphql';
import { getSchema } from '../src/services/ApolloServices/ApolloServerService';

async function testGraphQLQuery<T>(query: string, variables?: Record<string, never>): Promise<ExecutionResult<T>> {
    const schema = await getSchema();

    const result: Promise<ExecutionResult<T>> = (await graphql({
        schema,
        source: query,
        variableValues: variables,
    })) as Promise<ExecutionResult<T>>;

    return result;
}

export { testGraphQLQuery };
