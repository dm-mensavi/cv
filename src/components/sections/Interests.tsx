export default function Interests() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-1 uppercase tracking-wider font-georgia">
        Centres d&apos;Intérêt
      </h2>
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p>Technologies open-source</p>
            <p>Photographie</p>
          </div>
          <div>
            <p>Randonnée</p>
            <p>Lecture</p>
          </div>
        </div>
      </div>
    </section>
  );
}