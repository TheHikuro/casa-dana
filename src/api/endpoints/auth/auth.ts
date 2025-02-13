/**
 * Generated by orval 🍺
 * Do not edit manually.
 */
import { useMutation } from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import type { LoginModel, RegisterModel } from '../../models'
import { customAxiosInstance } from '../../customAxiosInstance'
import type { ErrorType } from '../../customAxiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const postAuthRegister = (
  registerModel: RegisterModel,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<void>(
    {
      url: `/Auth/register`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: registerModel,
      signal
    },
    options
  )
}

export const getPostAuthRegisterMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postAuthRegister>>,
    TError,
    { data: RegisterModel },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postAuthRegister>>,
  TError,
  { data: RegisterModel },
  TContext
> => {
  const mutationKey = ['postAuthRegister']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postAuthRegister>>,
    { data: RegisterModel }
  > = (props) => {
    const { data } = props ?? {}

    return postAuthRegister(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostAuthRegisterMutationResult = NonNullable<
  Awaited<ReturnType<typeof postAuthRegister>>
>
export type PostAuthRegisterMutationBody = RegisterModel
export type PostAuthRegisterMutationError = ErrorType<unknown>

export const usePostAuthRegister = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postAuthRegister>>,
    TError,
    { data: RegisterModel },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof postAuthRegister>>,
  TError,
  { data: RegisterModel },
  TContext
> => {
  const mutationOptions = getPostAuthRegisterMutationOptions(options)

  return useMutation(mutationOptions)
}
export const postAuthLogin = (
  loginModel: LoginModel,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<void>(
    {
      url: `/Auth/login`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: loginModel,
      signal
    },
    options
  )
}

export const getPostAuthLoginMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postAuthLogin>>,
    TError,
    { data: LoginModel },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postAuthLogin>>,
  TError,
  { data: LoginModel },
  TContext
> => {
  const mutationKey = ['postAuthLogin']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postAuthLogin>>,
    { data: LoginModel }
  > = (props) => {
    const { data } = props ?? {}

    return postAuthLogin(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostAuthLoginMutationResult = NonNullable<
  Awaited<ReturnType<typeof postAuthLogin>>
>
export type PostAuthLoginMutationBody = LoginModel
export type PostAuthLoginMutationError = ErrorType<unknown>

export const usePostAuthLogin = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postAuthLogin>>,
    TError,
    { data: LoginModel },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof postAuthLogin>>,
  TError,
  { data: LoginModel },
  TContext
> => {
  const mutationOptions = getPostAuthLoginMutationOptions(options)

  return useMutation(mutationOptions)
}
