"use client";

import { SemesterForm } from "@/components";
import { cn } from "@/libs/styles";
import { ScoreFormType, SemesterId, SemesterType } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

const semesterArray: { title: SemesterType; id: SemesterId }[] = [
  { title: "1학년 1학기", id: "score1_1" },
  { title: "1학년 2학기", id: "score1_2" },
  { title: "2학년 1학기", id: "score2_1" },
  { title: "2학년 2학기", id: "score2_2" },
  { title: "3학년 1학기", id: "score3_1" },
] as const;

const TestFormPage = () => {
  const { register, handleSubmit } = useForm<ScoreFormType>({});

  const handleFormSubmit: SubmitHandler<ScoreFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className={cn("flex", "h-lvh", "items-center", "justify-center")}>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={cn("flex", "flex-col", "items-center")}
      >
        <div className={cn("flex", "gap-6")}>
          {semesterArray.map(({ title, id }) => (
            <SemesterForm title={title} id={id} register={register} key={id} />
          ))}
        </div>
        <button
          className={cn(
            "pointer",
            "mt-[100px]",
            "select-none",
            "rounded-[10px]",
            "border",
            "border-[#0F0921]",
            "px-[87.5px]",
            "py-[10px]",
            "text-[28px]/[40.54px]",
            "font-[700]",
            "text-[#0F0921]"
          )}
        >
          저장
        </button>
      </form>
    </div>
  );
};

export default TestFormPage;
