import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({
      creador: params.id,
    }).populate("creador");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Fallo del fetch de prompts", { status: 500 });
  }
};
