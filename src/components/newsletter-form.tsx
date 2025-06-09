"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type React from "react";
import { subscribeEmail } from "@/app/_actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState, useMemo } from "react";
const newsletterSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    clearErrors,
    setError,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // Here you would typically handle the subscription
      const formData = new FormData();
      formData.append("email", data.email);

      const result = await subscribeEmail(formData);

      if (result.success) {
        setSuccess(
          "Votre email a été ajouté à la liste des abonnés avec succès !"
        );

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccess(null);
          reset();
        }, 5000);
      }
    } catch {
      setError("root.serverError", {
        message:
          "Une erreur est survenue lors de l'abonnement à la newsletter. Veuillez réessayer.",
      });

      // Clear server error after 5 seconds
      setTimeout(() => {
        clearErrors("root.serverError");
      }, 5000);
    }
  };

  const errorMessages = useMemo(() => 
    errors?.root?.serverError
      ? []
      : Object.values(errors).map((error) => error.message),
    [errors]
  );

  // Hide errors after 5 seconds
  useEffect(() => {
    if (errorMessages.length > 0) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMessages, isSubmitting, clearErrors]);

  return (
    <div className="w-full px-2.5 md:px-0 translate-y-[40px] opacity-0">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <div className="w-full sm:w-[80%] md:w-[75%] lg:w-full flex flex-col gap-5">
            {errorMessages.length > 0 && (
              <Alert className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AlertCircle className="size-4" />
                <AlertTitle>
                  Veuillez corriger les erreurs suivantes :
                </AlertTitle>
                <AlertDescription>
                  <ul className="list-disc list-inside">
                    {errorMessages.map((message, index) => (
                      <li key={index}>{message}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {errors?.root?.serverError && (
              <Alert className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AlertCircle className="size-4" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>
                  {errors.root.serverError.message}
                </AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AlertCircle />
                <AlertTitle>Succès</AlertTitle>
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <div className="group relative transition-all duration-300 hover:scale-[1.01]">
              <Input
                type="email"
                placeholder="Saisissez votre email"
                {...register("email")}
                disabled={isSubmitting}
                className="h-14 border-2 border-input bg-background/60 font-figtree px-4 text-[1em] text-foreground shadow-sm transition-all disabled:opacity-85 rounded-full"
              />

              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-secondary/20 to-background/50 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-70" />
            </div>
          </div>

          <div className="w-full sm:w-[80%] md:w-[75%] lg:w-[55%] ml-0 lg:ml-5">
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              className="relative w-full h-auto border px-7.5 has-[>svg]:px-7.5 py-5 rounded-full font-figtree text-[15px] leading-none capitalize text-white border-white/30 bg-white/10 before:content-[''] before:w-full before:h-full before:bg-inherit before:absolute before:inset-0 before:backdrop-blur-[2.4px] before:rounded-full before:mix-blend-[initial] before:border before:border-white/30 hover:bg-secondary hover:text-secondary-foreground shadow-sm"
            >
              <div className="relative flex items-center gap-2">
                {isSubmitting && <Loader2 className="animate-spin" />}
                S&apos;abonner
              </div>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
