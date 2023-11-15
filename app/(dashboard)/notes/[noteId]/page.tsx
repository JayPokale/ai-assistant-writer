import CustomEditor from "@/components/editor";

const Notebook = ({ params }: { params: { noteId: string } }) => {
  return (
    <main className="flex justify-center">
      <CustomEditor noteId={params.noteId} />
    </main>
  );
};

export default Notebook;
