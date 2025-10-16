import { CardWrapper } from "./card-wrapper"

export const LoginForm = ()=> {
    return (
        <CardWrapper
        headerLabel='Welcome back'
        backButtonHref="/auth/register"
        backButtonLabel='Don not have an account?'
        showSocial
        >
            Login Form
        </CardWrapper>
    )
}