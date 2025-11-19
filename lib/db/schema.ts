import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  service: text("service"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const leads = pgTable("leads", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name"),
  service: text("service"),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
