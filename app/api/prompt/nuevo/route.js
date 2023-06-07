import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creador: userId, prompt, tag });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { satuts: 201 });
  } catch (error) {
    return new Response("Fallo al crear un nuevo prompt", { status: 500 });
  }
};
