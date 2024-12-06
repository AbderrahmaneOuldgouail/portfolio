"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "next-intl";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Mail, User } from "lucide-react";

export function ContactMeForm({
  trans,
  type,
}: {
  trans: Record<string, string>;
  type: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .send(
        "service_8gsjp0q",
        "template_5ctjbao",
        {
          locale,
          type: type,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "lIYPpKH9IVwtklCcn",
        }
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          setIsLoading(false);
          toast.success(trans.success);
        },
        (reason) => {
          if (
            process.env.NODE_ENV === "development" ||
            process.env.NODE_ENV === "test"
          ) {
            console.log("Failed", reason);
          }
          toast.error(trans.error);
          setIsLoading(false);
        }
      );
  };

  return (
    <Card className="h-full w-1/2 bg-foreground">
      <CardHeader className="h-full">
        <form onSubmit={submitHandler} className="space-y-4">
          <div className="flex items-center gap-2 border-b focus-within:border-primary transition-all duration-200 ease-linear">
            <User className="text-background size-7 focus-within:text-primary" />
            <Input
              type="text"
              name="name"
              className="border-none text-background bg-foreground focus-visible:outline-none"
              onChange={handleChange}
              placeholder={trans.name}
            />
          </div>
          <div className="flex items-center gap-2 border-b focus-within:border-primary transition-all duration-200 ease-linear">
            <Mail className="text-background size-7 focus-within:text-primary" />
            <Input
              type="email"
              name="email"
              className="border-none text-background bg-foreground focus-visible:outline-none"
              onChange={handleChange}
              placeholder={trans.email}
            />
          </div>
          <Textarea
            name="message"
            className="h-full"
            onChange={handleChange}
            placeholder={trans.message}
          />
          <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {trans.sendMessage}
          </Button>
          </div>
        </form>
      </CardHeader>
    </Card>
  );
}
