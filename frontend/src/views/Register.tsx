import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/easy_health_logo_horizontal_white.svg";
import bg from "../assets/images/login-bg.svg";
import { Button } from "../components/Button";
import { StyledCard } from "../components/Card";
import { CenteredContent } from "../components/ConteredContent";
import Datepicker from "../components/Datepicker";
import { Input, InputProps } from "../components/Input";
import User from "../models/User";

const RegisterContainer = styled(CenteredContent)`
  background: url(${bg}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  gap: 15px;
  img {
    width: 200px;
    height: auto;
  }
`;

const CardStep = styled(StyledCard)`
  width: 420px;
  padding: 16px;

  .title {
    font-size: 26px;
    font-weight: 400;
    text-align: center;
    font-family: "Noto Sans Display", sans-serif;
    color: #82848d;
  }
`;

interface RegisteStepProps {
  control: InputProps["control"];
  currentStep: "personal" | "loginInfo";
}

export const Register: React.FC = () => {
  const [user, setUser] = useState<User>();

  const [step, setStep] = useState<"personal" | "loginInfo">("personal");
  const { control, handleSubmit, formState, getValues, setValue } = useForm();

  const stepSubmit = (data: Partial<User>) => {
    console.log(step, data);
  };

  const submit = () => {
    console.log(formState);
    console.log(getValues());
    setStep("loginInfo");
  };

  return (
    <RegisterContainer>
      <img src={logo} alt="Easy Health Logo" />
      <CardStep>
        <div className="title">Criar conta</div>
        <form noValidate>
          <StepLoginInfo currentStep={step} control={control} />
          <StepPersonalData currentStep={step} control={control} />

          <div>
            {step === "loginInfo" && (
              <Button
                type="button"
                variant="secondary"
                onClick={() => setStep("personal")}
              >
                Voltar
              </Button>
            )}

            <Button type="button" variant="primary" onClick={submit}>
              {step === "personal" ? "Proxima etapa" : "Começar a usar"}
            </Button>
          </div>
        </form>
        <div>
          Você já possui uma conta? <Link to="/login">Faça já o login!</Link>
        </div>
      </CardStep>
    </RegisterContainer>
  );
};

const StepPersonalData: React.FC<RegisteStepProps> = (props) => {
  const FIXO_MASK = "(99) 9999-9999";
  const MOVEL_MASK = "(99) 99999-9999";

  const [phoneMask, setPhoneMask] = useState<
    typeof FIXO_MASK | typeof MOVEL_MASK
  >(FIXO_MASK);

  return (
    <div
      style={{ display: props.currentStep === "personal" ? "block" : "none" }}
    >
      <div>
        <Input
          name="nome"
          control={props.control}
          label="Nome Completo"
          required
        />
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Input
          name="phone"
          control={props.control}
          label="Telefone"
          mask={phoneMask}
          beforeMaskEvent={(currentState, nextState) => {
            const rawValue = currentState.value.replace(/[\D]/g, "");
            if (rawValue.length > 10) {
              setPhoneMask(MOVEL_MASK);
            } else {
              setPhoneMask(FIXO_MASK);
            }
          }}
        />
        <Datepicker
          name="birthDate"
          control={props.control}
          label="Data de nascimento"
          required
          type="date"
        />
      </div>
      <div>
        <Input
          name="doc"
          control={props.control}
          label="CPF/CNPJ"
          rules={{ required: true, minLength: 3 }}
          mask={""}
        />
      </div>
    </div>
  );
};

const StepLoginInfo: React.FC<RegisteStepProps> = (props) => {
  return (
    <div
      style={{ display: props.currentStep === "loginInfo" ? "block" : "none" }}
    >
      <Input name="email" control={props.control} label="email" type="email" />
    </div>
  );
};

export default Register;
