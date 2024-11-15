"use client";
import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { SectionProps } from "./Section.types";
import { cn } from "@/helpers/cn";

export const Section: FC<PropsWithChildren<SectionProps>> = ({ className, children }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className={cn("mb-5 w-full rounded border border-solid border-gray-400 bg-white p-5 sm:p-10 md:max-w-[75vw] lg:min-h-[50vh] 2xl:max-w-[60vw]", className)}
  >
    {children}
  </motion.section>
);
