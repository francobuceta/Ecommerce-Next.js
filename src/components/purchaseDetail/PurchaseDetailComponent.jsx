import DetailsTable from "./DetailsTable";

const PurchaseDetailComponent = () => {
    return(
        <div className="flex flex-col justify-center items-center px-5 gap-5">
            <h2 className="text-3xl text-white font-semibold">
                ¡Felicitaciones!
            </h2>
            <p className="text-xl text-white">
                Tu compra se ha realizado correctamente. Te hemos enviado un email para coordinar el envío.
            </p>
            <h3 className="text-2xl text-white font-semibold mt-5">
                Detalles de la compra
            </h3>

            <DetailsTable />
        </div>
    )
}

export default PurchaseDetailComponent;