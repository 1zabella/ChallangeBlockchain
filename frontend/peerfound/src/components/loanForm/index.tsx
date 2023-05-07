import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import Input from '../input'
import { RightIcon } from '../rightIcon'
import { Form } from './style'
import { toast } from 'react-toastify';
import Link from 'next/link'


interface Props {
    setStage(stage: number): void
    handleSubmit: any
    register: any
    errors: any
}

const LoanForm: React.FC<Props> = ({ setStage,errors,handleSubmit,register }) => {
    const onSubmit = (data: any) => {
        if (data.value == null) {
            return toast.error("As senhas estão diferentes!")
        }
        setStage(1)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Input
                register={register}
                name="offerMaxValue"
                label="Valor ofertado*"
                error={errors['value']}
                type="number"
            />
            <Input
                register={register}
                name="interestRate"
                label="Taxa de interesse *"
                error={errors['interestRate']}
                type="number"
            />
            <Input
                register={register}
                name="investmentTerm"
                label="Tempo de empréstimos (dias) *"
                error={errors['investmentTerm']}
                type="number"
            />

            
            <Button marginTop>
                Continuar <RightIcon />
            </Button>

            <Link href="/login">
                Já tem conta?Login
            </Link>
        </Form>
    )
}

export default LoanForm
