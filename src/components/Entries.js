import EntryCard from "./EntryCard";

const Entries = ({ entries }) => {
  return (
    <div>
      {entries.map((item, i) => (
        <EntryCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Entries;
