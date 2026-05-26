/*
  # Create inquiries table

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required)
      - `email` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for anyone to insert (public contact form)
    - No select policy for public (data is private)
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
