export default function InputComponent({title,type='text',...props}){
    return (
        <label>
            {
                title && (
                    <span className="block text-xs mb-3">{title}</span>
                )

            }

            <div>
                {
                    type==='textarea' ? (
                        <textarea
                            className="input"
                            {...props}
                        />
                    ) : type==='select' ? (
                        <select
                            className="input"
                            {...props}
                        />
                    ) : (
                        <input
                            type={type}
                            className="input"
                            {...props}
                        />
                    )
                }

            </div>
        </label>
    )
}