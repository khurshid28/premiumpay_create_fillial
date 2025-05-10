import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import ResultsTable from "../../components/tables/test/resultsTable";

export default function ResultsPage() {
  return (
    <>
      <PageMeta
        title="Credit Dashboard"
        description="Credit Dashboard"
      />
      <PageBreadcrumb pageTitle="Results" />
      <div className="space-y-6">
        <ComponentCard title="Results Table">
          <ResultsTable />
        </ComponentCard>
      </div>
    </>
  );
}
