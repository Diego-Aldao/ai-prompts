import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creador");
    if (!prompt) return new Response("Prompt no encontrado", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Fallo del fetch de prompts", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();
    const promptExistente = await Prompt.findById(params.id);
    if (!promptExistente)
      return new Response("Prompt no encontrado", { status: 404 });
    promptExistente.prompt = prompt;
    promptExistente.tag = tag;

    await promptExistente.save();

    return new Response(JSON.stringify(promptExistente), { status: 200 });
  } catch (error) {
    return new Response("Fallo al editar el prompt", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt eliminado exitosamente", { status: 200 });
  } catch (error) {
    return new Response("Error al eliminar el prompt", { status: 500 });
  }
};
