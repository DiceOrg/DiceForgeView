export default function CharacterView({ character }) {

    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="box">Container 1 - Box 1</div>
                </div>
                <div className="column">
                    <div className="box">Container 1 - Box 1</div>
                </div>
            </div>
            <div className="row">
                <div className="column size-1">
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Trackables</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Ability Scores</h5>
                        </header>
                        <div className="content">
                            <div className="row">
                                <div className="column text-center">
                                    <div>8</div>
                                    <div>Score</div>
                                </div>
                                <div className="column text-center size-3">
                                    <div>Str</div>
                                    <div>Strength</div>
                                </div>
                                <div className="column text-center">
                                    <div>-1</div>
                                    <div>Mod</div>
                                </div>
                                <div className="column text-center">
                                    <input type="checkbox" />
                                    <div>Prof</div>
                                </div>
                                <div className="column text-center">
                                    <div>0</div>
                                    <div>Misc</div>
                                </div>
                                <div className="column text-center">
                                    <div>-1</div>
                                    <div>Save</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column text-center">
                                    <div>8</div>
                                    <div>Score</div>
                                </div>
                                <div className="column text-center size-3">
                                    <div>Dex</div>
                                    <div>Dexterity</div>
                                </div>
                                <div className="column text-center">
                                    <div>-1</div>
                                    <div>Mod</div>
                                </div>
                                <div className="column text-center">
                                    <input type="checkbox" />
                                    <div>Prof</div>
                                </div>
                                <div className="column text-center">
                                    <div>0</div>
                                    <div>Misc</div>
                                </div>
                                <div className="column text-center">
                                    <div>-1</div>
                                    <div>Save</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column text-center">
                                    <div>8</div>
                                    <div>Score</div>
                                </div>
                                <div className="column text-center size-3">
                                    <div>Con</div>
                                    <div>Constitution</div>
                                </div>
                                <div className="column text-center">
                                    <div>-1</div>
                                    <div>Mod</div>
                                </div>
                                <div className="column text-center">
                                    <input type="checkbox" />
                                    <div>Prof</div>
                                </div>
                                <div className="column text-center">
                                    <div>0</div>
                                    <div>Misc</div>
                                </div>
                                <div className="column text-center">
                                    <div>-1</div>
                                    <div>Save</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Defenses</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Equipment</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Notes</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                </div>
                <div className="column size-2">
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Actions</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Spells</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Abilities</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Feats</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                </div>
                <div className="column size-3">
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Skills</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Proficiency</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Languages</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Proficiencies</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}