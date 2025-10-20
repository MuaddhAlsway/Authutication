'use client'

import { useState, useTransition } from 'react'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { RegisterScheme } from '@/schemas'
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { CardWrapper } from './card-wrapper'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-sucess'
import { register } from '@/action/register'

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined >('')
  const [sucess, setSucess] = useState<string | undefined >('')

  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterScheme>>({
    resolver: zodResolver(RegisterScheme),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterScheme>) => {
    setError('');
    setSucess('');
    startTransition(() => {
           register(values)
           .then((data) =>{
            setError(data.error)
            setSucess(data.success)
           })
    })
    
    
  }

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
             <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Muaadh AL-Sway"
                      
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.deo@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field}
                    disabled={isPending}
                     placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error}/>
          <FormSuccess message={sucess}/>
          <Button 
          disabled={isPending}
          type="submit" className="w-full">
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
